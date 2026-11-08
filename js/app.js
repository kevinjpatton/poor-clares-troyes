/* Poor Clares of Troyes: page behaviour.
   Text lives in data/content.js; news posts in data/news.js. */

(function () {
  "use strict";

  var SITE = window.SITE || {};
  var CONTENT = window.CONTENT || { en: {}, fr: {} };
  var NEWS = Array.isArray(window.NEWS) ? window.NEWS : [];
  var STORAGE_KEY = "clarisses-lang";
  var lang = pickInitialLang();

  /* ---------- helpers ---------- */

  function t(key) {
    var d = CONTENT[lang] || {};
    if (d[key] != null) return d[key];
    return (CONTENT.en && CONTENT.en[key]) || "";
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function storageGet() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { window.localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* private mode: ignore */ }
  }

  function pickInitialLang() {
    var saved = storageGet();
    if (saved === "en" || saved === "fr") return saved;
    var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    return String(prefs[0] || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }

  function mailto(address, subject) {
    return "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }

  /* ---------- static links ---------- */

  function setLinks() {
    var phone = SITE.phoneDisplay || "";
    var phoneHref = "tel:" + (SITE.phoneLink || "");
    var email = SITE.email || "";
    [["phoneLink", phoneHref, phone], ["footerPhone", phoneHref, phone],
     ["emailLink", mailto(email), email], ["footerEmail", mailto(email), email]].forEach(function (x) {
      var a = document.getElementById(x[0]);
      if (a) { a.href = x[1]; a.textContent = x[2]; }
    });
    document.getElementById("donateLink").href = SITE.donateUrl;
    document.getElementById("mapLink").href = SITE.mapLink;
    var frame = document.getElementById("mapFrame");
    if (!frame.getAttribute("src")) frame.src = SITE.mapEmbed;
  }

  /* ---------- language ---------- */

  function applyLang(next, keepPlace) {
    var anchor = null, anchorTop = 0;
    if (keepPlace) {
      // Remember which element sits under the top bar, so the reader
      // stays in the same place after the text changes length.
      var probe = document.elementFromPoint(window.innerWidth / 2, 90);
      anchor = probe && probe.closest("section, .card, article");
      if (anchor) anchorTop = anchor.getBoundingClientRect().top;
    }

    lang = next;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var v = t(node.getAttribute("data-i18n"));
      if (v) node.innerHTML = v;
    });
    document.querySelectorAll("[data-lang-opt]").forEach(function (o) {
      o.classList.toggle("is-active", o.getAttribute("data-lang-opt") === lang);
    });
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.setAttribute("aria-label", t("lang.switch"));
      b.title = t("lang.switch");
    });

    document.getElementById("vocationsLink").href = mailto(SITE.vocationsEmail, t("who.vocations.title"));
    document.getElementById("subscribeLink").href = mailto(SITE.email, t("news.letter.subject"));
    document.getElementById("giveEmailLink").href = mailto(SITE.email, t("give.other.title"));
    document.getElementById("easterLink").href = lang === "fr" ? "assets/pdf/fr/2018-paques.pdf" : "assets/pdf/en/2018-easter.pdf";
    document.getElementById("lbClose").setAttribute("aria-label", t("lightbox.close"));
    document.getElementById("lbPrev").setAttribute("aria-label", t("lightbox.prev"));
    document.getElementById("lbNext").setAttribute("aria-label", t("lightbox.next"));

    renderClock();
    renderPaypal();
    renderQuantities();
    renderNews();
    renderNewsletters();
    renderSchedule();
    renderSteps();
    renderGallery();
    renderPlayerLabel();

    if (anchor) {
      window.scrollBy(0, anchor.getBoundingClientRect().top - anchorTop);
    }
  }

  function toggleLang() {
    var next = lang === "fr" ? "en" : "fr";
    storageSet(next);
    applyLang(next, true);
  }

  /* ---------- "Right now in Troyes" ---------- */

  function troyesTime() {
    var now = new Date();
    if (lang === "fr") {
      var p = new Intl.DateTimeFormat("fr-FR", { hour: "numeric", minute: "2-digit", hour12: false, timeZone: "Europe/Paris" })
        .formatToParts(now);
      var h = "", m = "";
      p.forEach(function (x) { if (x.type === "hour") h = String(Number(x.value)); if (x.type === "minute") m = x.value; });
      return h + " h " + m;
    }
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Europe/Paris" })
      .format(now).replace(/\s?AM/i, " am").replace(/\s?PM/i, " pm");
  }

  function renderClock() {
    var node = document.getElementById("clockTime");
    var parts = t("clock.time").split("{time}");
    node.textContent = "";
    node.appendChild(document.createTextNode(parts[0] || ""));
    node.appendChild(el("strong", "clock__now", troyesTime()));
    node.appendChild(document.createTextNode(parts[1] || ""));
  }

  function startClock() {
    // Re-render on each new minute.
    var msToNextMinute = 60000 - (Date.now() % 60000) + 50;
    setTimeout(function () {
      renderClock();
      setInterval(renderClock, 60000);
    }, msToNextMinute);
  }

  /* ---------- shop ---------- */

  function renderPaypal() {
    document.querySelectorAll("[data-paypal]").forEach(function (a) {
      var url = (SITE.paypal || {})[a.getAttribute("data-paypal")];
      a.textContent = "";
      var icon = el("i", "fa-brands fa-paypal");
      a.appendChild(icon);
      a.appendChild(document.createTextNode(" " + (url ? t("cd.buy") : t("cd.buyMissing"))));
      if (url) {
        a.href = url;
        a.classList.remove("is-disabled");
        a.removeAttribute("aria-disabled");
        a.removeAttribute("tabindex");
      } else {
        a.removeAttribute("href");
        a.classList.add("is-disabled");
        a.setAttribute("aria-disabled", "true");
      }
    });
  }

  function renderQuantities() {
    var body = document.getElementById("qtyBody");
    body.textContent = "";
    (window.CD_QUANTITIES || []).forEach(function (q) {
      var tr = el("tr");
      tr.appendChild(el("td", null, q.qty + " CD"));
      var price = q.price + " €" + (q.postage ? " + " + q.postage + " € " + t("cd.postage") : "");
      var td = el("td", null, price);
      if (!q.postage) {
        td.appendChild(document.createTextNode(" "));
        td.appendChild(el("span", "badge badge--teal badge--inline", t("cd.freeShipping")));
      }
      tr.appendChild(td);
      body.appendChild(tr);
    });
  }

  /* ---------- news ---------- */

  function formatDate(s) {
    var bits = String(s || "").split("-").map(Number);
    if (!bits[0]) return "";
    var d = new Date(Date.UTC(bits[0], (bits[1] || 1) - 1, bits[2] || 1));
    var opts = bits[2] ? { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
                       : { month: "long", year: "numeric", timeZone: "UTC" };
    return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", opts).format(d);
  }

  function renderNews() {
    var list = document.getElementById("newsList");
    list.textContent = "";
    var posts = NEWS.slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

    if (!posts.length) {
      var empty = el("div", "card news__empty");
      empty.appendChild(el("i", "fa-regular fa-newspaper"));
      empty.appendChild(el("p", null, t("news.empty")));
      list.appendChild(empty);
      return;
    }

    posts.forEach(function (post) {
      var c = post[lang] || post.en || {};
      var card = el("article", "card news__item");

      if (post.image) {
        var fig = el("figure", "news__img");
        var img = el("img");
        img.src = post.image;
        img.alt = "";
        img.loading = "lazy";
        img.addEventListener("error", function () { fig.remove(); card.classList.add("news__item--noimg"); });
        fig.appendChild(img);
        card.appendChild(fig);
      } else {
        card.classList.add("news__item--noimg");
      }

      var body = el("div", "news__body");
      var date = el("p", "news__date");
      date.appendChild(el("i", "fa-regular fa-calendar"));
      date.appendChild(document.createTextNode(" " + formatDate(post.date)));
      body.appendChild(date);
      body.appendChild(el("h3", "news__title", c.title || ""));
      String(c.text || "").split(/\n\s*\n/).forEach(function (para) {
        if (para.trim()) body.appendChild(el("p", null, para.trim()));
      });
      if (post.link) {
        var a = el("a", "link");
        a.href = post.link;
        a.target = "_blank";
        a.rel = "noopener";
        a.appendChild(document.createTextNode((c.linkText || t("news.readMore")) + " "));
        a.appendChild(el("i", "fa-solid fa-arrow-up-right-from-square"));
        body.appendChild(a);
      }
      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function renderNewsletters() {
    var ul = document.getElementById("pdfList");
    ul.textContent = "";
    ((window.NEWSLETTERS || {})[lang] || []).forEach(function (n) {
      var li = el("li");
      var a = el("a");
      a.href = "assets/pdf/" + lang + "/" + n[1] + ".pdf";
      a.target = "_blank";
      a.rel = "noopener";
      a.appendChild(el("i", "fa-regular fa-file-pdf"));
      a.appendChild(document.createTextNode(" " + n[0]));
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* ---------- visit & donate ---------- */

  function renderSchedule() {
    var dl = document.getElementById("timesList");
    dl.textContent = "";
    (window.SCHEDULE || []).forEach(function (row) {
      var wrap = el("div", "times__row");
      wrap.appendChild(el("dt", null, row[lang] || row.en));
      wrap.appendChild(el("dd", null, row.time[lang] || row.time.en));
      dl.appendChild(wrap);
    });
  }

  function renderSteps() {
    var ol = document.getElementById("donateSteps");
    ol.textContent = "";
    ((window.DONATE_STEPS || {})[lang] || []).forEach(function (s) {
      var li = el("li");
      li.innerHTML = s;
      ol.appendChild(li);
    });
  }

  /* ---------- gallery & lightbox ---------- */

  var GALLERY = window.GALLERY || [];
  var lbIndex = 0;
  var lastFocus = null;

  function renderGallery() {
    var g = document.getElementById("gallery");
    g.textContent = "";
    GALLERY.forEach(function (item, i) {
      var b = el("button", "gallery__item");
      b.type = "button";
      b.setAttribute("aria-label", item[lang] || item.en);
      var img = el("img");
      img.src = item.src;
      img.alt = item[lang] || item.en;
      img.loading = "lazy";
      b.appendChild(img);
      b.appendChild(el("span", "gallery__cap", item[lang] || item.en));
      b.addEventListener("click", function () { openLightbox(i); });
      g.appendChild(b);
    });
    if (!document.getElementById("lightbox").hidden) showLightbox();
  }

  function showLightbox() {
    var item = GALLERY[lbIndex];
    var img = document.getElementById("lbImg");
    img.src = item.src;
    img.alt = item[lang] || item.en;
    document.getElementById("lbCap").textContent = (lbIndex + 1) + " / " + GALLERY.length + " · " + (item[lang] || item.en);
  }

  function openLightbox(i) {
    lbIndex = i;
    lastFocus = document.activeElement;
    var lb = document.getElementById("lightbox");
    lb.hidden = false;
    document.body.classList.add("no-scroll");
    showLightbox();
    document.getElementById("lbClose").focus();
  }

  function closeLightbox() {
    document.getElementById("lightbox").hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  function stepLightbox(d) {
    lbIndex = (lbIndex + d + GALLERY.length) % GALLERY.length;
    showLightbox();
  }

  function initLightbox() {
    var lb = document.getElementById("lightbox");
    document.getElementById("lbClose").addEventListener("click", closeLightbox);
    document.getElementById("lbPrev").addEventListener("click", function () { stepLightbox(-1); });
    document.getElementById("lbNext").addEventListener("click", function () { stepLightbox(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  /* ---------- audio ---------- */

  var audio, playBtn;

  function fmt(sec) {
    if (!isFinite(sec)) return "0:00";
    var s = Math.floor(sec);
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  function renderPlayerLabel() {
    if (!playBtn) return;
    var playing = audio && !audio.paused;
    playBtn.setAttribute("aria-label", playing ? t("media.audio.pause") : t("media.audio.play"));
    playBtn.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
  }

  function initAudio() {
    audio = document.getElementById("audio");
    playBtn = document.getElementById("playBtn");
    var fill = document.getElementById("playFill");
    var time = document.getElementById("playTime");
    var bar = document.getElementById("playBar");

    function duration() {
      // 1'46" if the browser cannot read the length from the file.
      return isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 106;
    }

    playBtn.addEventListener("click", function () {
      if (audio.paused) audio.play(); else audio.pause();
    });
    ["play", "pause", "ended"].forEach(function (ev) { audio.addEventListener(ev, renderPlayerLabel); });
    audio.addEventListener("timeupdate", function () {
      var dur = duration();
      fill.style.width = (audio.currentTime / dur * 100) + "%";
      time.textContent = fmt(audio.currentTime) + " / " + fmt(dur);
    });
    bar.addEventListener("click", function (e) {
      var r = bar.getBoundingClientRect();
      var dur = duration();
      audio.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * dur;
      if (audio.paused) audio.play();
    });
  }

  /* ---------- navigation ---------- */

  function initNav() {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.innerHTML = (open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>') +
        '<span class="sr-only">' + t("nav.menu") + "</span>";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (nav.classList.contains("is-open")) btn.click();
      });
    });
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.addEventListener("click", toggleLang);
    });

    // Highlight the section currently on screen.
    var links = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && links[en.target.id]) {
            Object.keys(links).forEach(function (k) { links[k].classList.remove("is-current"); });
            links[en.target.id].classList.add("is-current");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
    }
  }

  /* ---------- start ---------- */

  setLinks();
  initNav();
  initLightbox();
  initAudio();
  applyLang(lang, false);
  startClock();
})();
