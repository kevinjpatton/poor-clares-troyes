/*
  All site text, in English (en) and French (fr).

  Where the French comes from:
  - Most French text is the sisters' own wording, taken from their French
    site (clarissesdetroyes.wixsite.com/clarissesdetroyes).
  - Lines marked  // TR  had no French original and were translated by
    Claude. Please ask the sisters to read these over.

  Things to fill in later are marked  // TODO.
*/

window.SITE = {
  /* ---- Links and numbers used across the site --------------------- */
  email: "secretariat.clarissesdetroyes@gmail.com",
  vocationsEmail: "voc.clarissesdetroyes@gmail.com",
  phoneDisplay: "+33 (0)3 25 42 97 32",
  phoneLink: "+33325429732",
  donateUrl: "https://don.fondationdesmonasteres.org/soutenir",
  mapEmbed: "https://www.google.com/maps?q=26+rue+Mitantier,+10000+Troyes,+France&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=26+rue+Mitantier+10000+Troyes+France",

  /* PayPal payment links for each CD.
     TODO: paste each link between the quotes. While a link is empty,
     its button shows "PayPal link needed" instead of opening PayPal. */
  paypal: {
    cd1: "",
    cd2: ""
  }
};

window.CONTENT = {
  en: {
    /* ---- Top bar & navigation ---- */
    "brand.name": "Poor Clares of Troyes",
    "brand.sub": "Perpetual Adoration",
    "nav.home": "Adoration",
    "nav.who": "Who we are",
    "nav.work": "Our work",
    "nav.shop": "Shop",
    "nav.news": "News",
    "nav.media": "Gallery",
    "nav.visit": "Visit",
    "nav.give": "Donate",
    "nav.menu": "Menu",
    "lang.switch": "Français",

    /* ---- Hero / Adoration ---- */
    "hero.eyebrow": "Monastère Notre-Dame des Anges · Troyes, France",
    "hero.title": "Thanks be to God through Jesus in the Most Blessed Sacrament!",
    "hero.welcome": "Situated in the heart of the city, close to the Cathedral of Saint Peter and Saint Paul in the diocese of Troyes, we, the Poor Clares of Perpetual Adoration, welcome you to our Monastery, Notre Dame des Anges (Our Lady of the Angels).",
    "hero.charism": "Our charism is Perpetual Adoration of Jesus in the Most Blessed Sacrament, in the spirit of thanksgiving. This is our <em>raison d'être</em>, our reason for existence as an Order in the Church.",
    "clock.label": "Right now in Troyes",
    "clock.time": "It is {time} in Troyes.",
    "clock.line": "At this very moment, a sister is kneeling in adoration before the Blessed Sacrament. Night and day, the prayer never stops.",
    "hero.ctaVisit": "Visit the chapel",
    "hero.ctaGive": "Support the sisters",
    "hero.watch.title": "Keeping watch, night and day",
    "hero.watch.text": "Each Sister has an hour of Adoration every day and a time of night Adoration each week. In the name of the entire Church, we place ourselves in His presence in a spirit of loving adoration, reparation and thanksgiving.",

    /* ---- Who we are ---- */
    "who.kicker": "Who we are",
    "who.title": "A contemplative branch of the Franciscan family",
    "who.story.title": "Our story",
    "who.story.text": "<p>Our Order of Poor Clares of Perpetual Adoration was founded in Paris on December 8th, 1854 by Father Bonaventure Heurlaut, a Capuchin Franciscan, and Mother Marie de Sainte Claire Bouillevaux, both from the Troyes region.</p><p>In 1856 the Community transferred to Troyes, the diocese of origin of the two founders. The same year, the Sisters received authorization from the Bishop, the Most Reverend Pierre Louis Cœur, to have Adoration day and night before the Most Blessed Sacrament exposed in their Chapel.</p><p>Throughout one and a half centuries, our Order has founded 36 Monasteries in eight countries: France, Poland, Austria, Germany, Bangladesh, India, Kazakhstan and the United States.</p><p>Since 2007, after 10 years of interruption, monastic life is once again flourishing in this sacred place of prayer. A new chapter in the history of our Order has begun.</p>",
    "who.community.title": "Our community",
    "who.community.quote": "“Deo gratias per Jesum in Sanctissimo Sacramento!”",
    "who.community.text": "<p>We are a small international Community coming from different countries and cultures, gathered in God's name to give Him glory through Perpetual Adoration. Since 2013 our Community consists of Sisters coming from the United States, India and Poland.</p><p>Together we combine our strengths and our gifts to build up again a true Community life in this Monastery, which is the “cradle” of our Order. We are an international Community, but our goal is to revive our French roots, especially among the young women of the Troyes region.</p>",
    "who.community.pear": "We planted a pear tree, grafted from a tree planted by Saint Clare of Assisi… to remind us of our sources!",
    "who.spirit.title": "Our spiritual life",
    "who.spirit.text": "<p>The Rule of Saint Clare foresees a Community life combining prayer and work. Our cloistered life, lived in silence and peacefulness, draws us toward a more profound union with our Divine Spouse, simply seeking His face in all things.</p><p>The celebration of the Eucharist is the culminating point of our daily life. We have the privilege of adoring Our Lord truly present in the Most Blessed Sacrament solemnly exposed in our Chapel.</p><p>Adoration and meditation prolong, in a more intimate contact with God, the hours consecrated to the Divine Office, to spiritual reading, and to the study of our founders and spiritual masters, of the Fathers of the Church, and of the great theologians.</p>",
    "who.monastery.title": "Our monastery",
    "who.monastery.text": "<p>Our Monastery is situated in the central part of Troyes, very close to the Cathedral of Saint Peter and Saint Paul. All are welcome to come each day for Mass, to participate in the Divine Office, the Rosary and Adoration of the Most Blessed Sacrament. Those who come here find an oasis of prayer and of rest.</p><p>The renovation and upkeep of the first Monastery of our Order is very important to us. Our Chapel was renovated in 2011 and our workrooms in 2013, and work on the roofs continues. We hope to restore other parts of the Monastery as funds become available.</p>",
    "who.monastery.link": "See the restoration photos",
    "who.chaplain.title": "In memory of Mgr Bernard Savourat",
    "who.chaplain.text": "Born in 1929 and ordained a priest in 1954, Mgr Savourat served the diocese of Troyes for many years, notably as vicar general, before becoming chaplain to our Monastery. He was a man who knew how to listen, a man of peace. We carry this great servant of the Church in our prayer.",
    "who.vocations.title": "Vocations",
    "who.vocations.text": "Are you a young woman discerning a call to contemplative life? If you would like to learn more about our vocation, please contact us. We will be glad to hear from you.",
    "who.vocations.cta": "Write to us about vocations",

    /* ---- Our work ---- */
    "work.kicker": "Our work",
    "work.title": "Prayer and work, as Saint Clare wished",
    "work.quote": "“Looking upon work as a grace, we make full use of our abilities in the tasks assigned to us, that we may return to God with increase the talents He has given us.”",
    "work.quoteSource": "Constitutions, Article 148",
    "work.sewing.title": "The sewing room",
    "work.sewing.text": "To help support ourselves, we make albs in our sewing room for children's choirs, altar servers and First Communicants, as well as for priests. Most of our orders come from <em>Artisanat Monastique</em>: wedding procession dresses for little girls, vests and ties for boys, tablecloths, napkins and various other articles.",
    "work.garden.title": "The garden",
    "work.garden.text": "We cultivate our own vegetable garden, which helps us to feed our little Community. Being in touch with nature draws the soul in an incomparable way to meeting her Creator.",
    "work.house.title": "The daily work of the house",
    "work.house.text": "Like everyone else, we do all the work necessary for our small Community to live in this big Monastery: cleaning, cooking, laundry, gardening…",

    /* ---- Shop ---- */
    "shop.kicker": "Shop",
    "shop.title": "Support the sisters with a purchase",
    "shop.cds.title": "Violin CDs to help restore our Monastery",
    "shop.cds.text": "One of our Sisters, Sister Marie Antoinette, a former professional violinist, has recorded CDs to help finance the costly restoration of our several-centuries-old Monastery. All proceeds go towards the renovation.",
    "cd1.title": "CD1 · Vivaldi & Veracini",
    "cd1.desc": "Vivaldi, <em>The Four Seasons</em>; Veracini, <em>Concert Sonata</em>. Violin and organ, with the celebrated concert organist Michael Matthes, recorded in the Cathedral of Troyes.",
    "cd2.title": "CD2 · Bach & Handel",
    "cd2.desc": "Bach, <em>Two Concertos</em>; Handel, <em>Three Sonatas</em>. Violin and organ, with Michael Matthes, recorded in the Cathedral of Troyes.",
    "cd3.title": "CD3 · Saint Thaïs",
    "cd3.desc": "The Meditation from Massenet's opera <em>Thaïs</em> and other violin pieces, recorded at Our Lady of the Angels Monastery in Hanceville, Alabama, plus a transcription of Bach's Toccata and Fugue in D minor for solo violin, recorded at the Cathedral of Troyes.",
    "cd.price": "20 € + 1 € postage",
    "cd.buy": "Buy with PayPal",
    "cd.buyMissing": "PayPal link needed",
    "cd.qtyTitle": "Ordering several?",
    "cd.qty": "Quantity",
    "cd.total": "Price",
    "cd.freeShipping": "free shipping!",
    "cd.postage": "postage",
    "cd.soon": "Coming soon",
    "shop.albs.title": "Albs",
    "shop.albs.text": "<p>Sewing albs in children's sizes for altar servers and First Communicants, and albs for priests, is our main source of income.</p><p>We have a beautiful pattern for priests and deacons, created for us by friends who are tailors. They also taught us all the finishing touches that produce a well-made garment. The alb is monastic in style and made from a washable fabric that is practically wrinkle-free.</p>",
    "shop.albs.soon": "Ordering coming soon",
    "shop.albs.soonText": "Online ordering for albs is being prepared. Please check back soon.",

    /* ---- News ---- */
    "news.kicker": "News",
    "news.title": "News from the Monastery",
    "news.empty": "News coming soon.",
    "news.readMore": "Open",
    "news.letter.title": "Our newsletter: <em>Sentinels of the Dawn</em>",
    "news.letter.text": "Saint John Paul II invited young people to be “sentinels of the dawn”. As adorers of the Most Blessed Sacrament, we remain in the presence of our Eucharistic King day and night, so we borrowed his words as the title of our newsletter: they express our way of life so well.",
    "news.letter.archive": "Newsletter archive (PDF)",
    "news.letter.subscribe": "Subscribe by email",
    "news.letter.subject": "Newsletter subscription",
    "news.letter.note": "English editions. Switch to French to see the French editions.",

    /* ---- Gallery & media ---- */
    "media.kicker": "Gallery",
    "media.title": "Photos, music and memories",
    "media.gallery.title": "The restoration of our Monastery",
    "media.gallery.text": "Since our arrival in late August 2007, things have not slowed down: the Chapel was renovated in 2011, the workrooms in 2013, and the restoration of the roof is underway. Here are a few pictures to enjoy.",
    "media.audio.title": "À toi Dieu",
    "media.audio.text": "A short recording from the Monastery (1'46\").",
    "media.audio.play": "Play",
    "media.audio.pause": "Pause",
    "media.video.title": "Ten years of renovations",
    "media.video.text": "An overview of our progress, told in our Easter 2018 newsletter.",
    "media.video.cta": "Read the Easter 2018 newsletter",
    "media.nd.title": "Notre-Dame Cathedral in Paris",
    "media.nd.text": "<p>On the night of April 15, 2019, a violent fire ravaged Notre-Dame Cathedral in Paris. The spire collapsed and two-thirds of the roof were destroyed, but the bell towers were saved, along with the precious relics, including the Crown of Thorns, and the greatest Treasure of all, the Most Blessed Sacrament.</p><p>On Good Friday, April 19, 2019, an editorial by Étienne de Montety on the front page of <em>Le Figaro</em> reminded readers that a cathedral, however dazzling, is a repository for a far more precious treasure: Jesus Christ present in the Blessed Sacrament, and that the Church is built first of “living stones”.</p>",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous photo",
    "lightbox.next": "Next photo",

    /* ---- Visit & contact ---- */
    "visit.kicker": "Visit & contact",
    "visit.title": "Come and visit us!",
    "visit.text": "Our Monastery is in the centre of Troyes, a two-minute walk from the Cathedral of Saint Peter and Saint Paul.",
    "visit.address": "Address",
    "visit.phone": "Telephone",
    "visit.email": "Email",
    "visit.languages": "We speak French and English!",
    "visit.mapLink": "Open in Google Maps",
    "visit.times.title": "Mass, prayer and Adoration",
    "visit.times.note": "Times from the sisters' French website. Please check with the Monastery before travelling.",
    "visit.prayer.title": "Send a message",

    /* ---- Donate ---- */
    "give.kicker": "Donate",
    "give.title": "Help us continue our vocation",
    "give.text": "Thank you for helping us to continue to live our vocation as Adorers of the Most Blessed Sacrament.",
    "give.online.title": "Online, through the Fondation des Monastères",
    "give.online.note": "With a tax reduction and fiscal receipt for donors in France. (These do not apply outside France, but online donations are accepted from anywhere in the world.)",
    "give.cta": "Donate online",
    "give.steps.title": "How to direct your gift to us",
    "give.other.title": "By bank transfer or check",
    "give.other.text": "Donations by bank transfer or by check are accepted from anywhere in the world. Please write to us for the details.",
    "give.other.cta": "Email the sisters",
    "give.fdm.title": "About the Fondation des Monastères",
    "give.fdm.text": "The Foundation of Monasteries in Paris is a charitable organization that helps monasteries in France which are in need, in a spirit of solidarity. It collects donations and bequests to redistribute as financial aid, and offers advice for all the material aspects of monastic life.",
    "give.thanks": "We thank you with all our hearts for your generosity.",

    /* ---- Footer ---- */
    "footer.name": "Monastère des Clarisses · Notre-Dame des Anges",
    "footer.motto": "Adoremus in aeternum!"
  },

  fr: {
    "brand.name": "Clarisses de Troyes",
    "brand.sub": "Adoration Perpétuelle", // TR
    "nav.home": "Adoration",
    "nav.who": "Qui sommes-nous",
    "nav.work": "Notre travail",
    "nav.shop": "Boutique", // TR
    "nav.news": "Actualités",
    "nav.media": "Galerie", // TR
    "nav.visit": "Nous rendre visite", // TR
    "nav.give": "Faire un don", // TR
    "nav.menu": "Menu",
    "lang.switch": "English",

    "hero.eyebrow": "Monastère Notre-Dame des Anges · Troyes, France",
    "hero.title": "Rendons grâce à Dieu par Jésus au Très Saint Sacrement !",
    "hero.welcome": "Situées au cœur du bouchon de Champagne, à proximité de la Cathédrale Saint-Pierre et Saint-Paul dans le Diocèse de Troyes, nous, les Clarisses de l'Adoration Perpétuelle, vous accueillons au Monastère Notre-Dame des Anges.",
    "hero.charism": "Notre raison d'être, c'est l'Adoration Perpétuelle de Jésus dans le Très Saint Sacrement, en esprit d'action de grâce.",
    "clock.label": "En ce moment à Troyes", // TR
    "clock.time": "Il est {time} à Troyes.", // TR
    "clock.line": "En ce moment même, une sœur est à genoux en adoration devant le Très Saint Sacrement. Jour et nuit, la prière ne s'arrête jamais.", // TR
    "hero.ctaVisit": "Venir à la chapelle", // TR
    "hero.ctaGive": "Soutenir les sœurs", // TR
    "hero.watch.title": "Veiller jour et nuit", // TR
    "hero.watch.text": "Chacune de nous a une heure d'adoration chaque jour et un temps d'adoration nocturne pendant la semaine. Au nom de toute l'Église, nous nous mettons constamment en Sa présence, dans un esprit d'adoration amoureuse, de réparation et d'action de grâces.",

    "who.kicker": "Qui sommes-nous ?",
    "who.title": "Une branche contemplative de la famille franciscaine",
    "who.story.title": "Notre histoire",
    "who.story.text": "<p>Notre Ordre des Clarisses de l'Adoration Perpétuelle a été fondé à Paris le 8 décembre 1854 par le Père Bonaventure Heurlaut, prêtre franciscain capucin, et Mère Marie de Sainte Claire Bouillevaux, tous deux Aubois.</p><p>En 1856, la communauté des sœurs a été transférée à Troyes, au 26 rue Mitantier, dans le diocèse d'origine des deux fondateurs. La même année, les sœurs ont reçu de l'Évêque, Mgr Pierre Louis Cœur, l'autorisation de faire l'Adoration jour et nuit devant le Très Saint Sacrement exposé dans leur chapelle.</p><p>Au cours d'un siècle et demi, notre Ordre a fondé 36 monastères dans le monde : en France, Pologne, Autriche, Allemagne, au Bangladesh, en Inde, au Kazakhstan et aux États-Unis.</p><p>Depuis 2007, après 10 ans d'interruption, la vie monastique refleurit dans ce haut lieu de prière. Un nouveau chapitre dans l'histoire de notre Ordre a démarré.</p>",
    "who.community.title": "Notre communauté",
    "who.community.quote": "« Rendons grâce à Dieu par Jésus au Très Saint Sacrement ! »",
    "who.community.text": "<p>Nous sommes une petite communauté internationale venant d'horizons et de cultures très différents, rassemblées au nom de Dieu pour Lui rendre grâce dans l'adoration perpétuelle. Depuis 2013, notre communauté se compose de sœurs venant des États-Unis, de l'Inde et de la Pologne.</p><p>Nous rassemblons nos forces et nos dons pour reconstruire une vraie vie communautaire dans ce monastère qui est le « berceau » de notre Ordre. Nous sommes une communauté internationale, mais notre but est de faire revivre nos racines françaises et auboises.</p>",
    "who.community.pear": "Nous avons planté un poirier greffé d'un arbre planté par sainte Claire d'Assise… pour nous rappeler nos sources !",
    "who.spirit.title": "Notre vie spirituelle",
    "who.spirit.text": "<p>La règle de sainte Claire prévoit une vie communautaire alliant prière et travail. Notre vie cloîtrée, vécue dans le silence et le calme, nous attire vers une union plus profonde avec notre Divin Époux, à la recherche tout simplement de Son visage en tout.</p><p>La célébration de l'Eucharistie est le point culminant de notre vie quotidienne. Nous avons le privilège de pouvoir adorer Notre Seigneur vraiment présent dans le Très Saint Sacrement exposé solennellement dans notre chapelle.</p><p>L'adoration et la méditation prolongent, dans un contact plus intime avec Dieu, les heures consacrées à l'office divin, à la lecture spirituelle et à l'étude de nos fondateurs et maîtres spirituels, des Pères de l'Église et des grands théologiens.</p>",
    "who.monastery.title": "Notre monastère",
    "who.monastery.text": "<p>Notre monastère, Notre-Dame des Anges, est situé au centre-ville de Troyes, tout près de la Cathédrale Saint-Pierre et Saint-Paul. Chacun peut y venir chaque jour à la messe, participer à l'office divin, au chapelet et à l'adoration du Très Saint Sacrement. On y trouve une oasis de prière et de repos.</p><p>La rénovation, l'aménagement et l'entretien de ce premier monastère de l'Ordre nous tiennent à cœur. La chapelle a été rénovée en 2011 et les ateliers en 2013 ; les travaux des toitures se poursuivent. Nous espérons continuer la rénovation des autres bâtiments dans un avenir proche.</p>",
    "who.monastery.link": "Voir les photos des travaux", // TR
    "who.chaplain.title": "En mémoire de Mgr Bernard Savourat",
    "who.chaplain.text": "Né en 1929 et ordonné prêtre en 1954, Mgr Savourat a longtemps servi le diocèse de Troyes, notamment comme vicaire général, avant de devenir aumônier de notre monastère. C'était un homme qui savait écouter, un homme de paix. Portons dans notre prière ce grand serviteur de l'Église.",
    "who.vocations.title": "Vocations",
    "who.vocations.text": "Si vous voulez des renseignements sur une vocation dans notre communauté, contactez-nous ! Nous serons heureuses de vous répondre.",
    "who.vocations.cta": "Nous écrire au sujet des vocations", // TR

    "work.kicker": "Notre travail",
    "work.title": "Prière et travail, selon le vœu de sainte Claire", // TR
    "work.quote": "« Considérant le travail comme une grâce, nous nous efforçons d'utiliser nos talents pour accomplir les tâches qui nous sont demandées afin de rendre à Dieu ce qu'Il nous a donné, et même plus. »",
    "work.quoteSource": "Constitutions, article 148",
    "work.sewing.title": "L'atelier de couture", // TR
    "work.sewing.text": "Pour gagner notre vie, nous confectionnons des aubes pour les petits chanteurs, les enfants de chœur, les professions de foi, ainsi que pour les prêtres. Mais la plupart de nos commandes viennent de l'<em>Artisanat Monastique</em> : robes de cortège pour les filles, gilets et lavallières pour les garçons, nappes et serviettes de table, et d'autres articles variés.",
    "work.garden.title": "Le potager", // TR
    "work.garden.text": "Nous cultivons nous-mêmes notre potager, ce qui nous permet de produire une partie de notre nourriture. Le contact avec la nature dispose l'âme d'une façon incomparable à rencontrer son Créateur.",
    "work.house.title": "Le travail de la maison", // TR
    "work.house.text": "Comme tout le monde, nous travaillons dans tous les secteurs nécessaires pour pouvoir vivre en petite communauté dans notre grand monastère : ménage, cuisine, buanderie, jardinage…",

    "shop.kicker": "Boutique", // TR
    "shop.title": "Soutenir les sœurs par un achat", // TR
    "shop.cds.title": "Les CD au violon pour restaurer notre monastère",
    "shop.cds.text": "Pour recueillir les fonds nécessaires à la restauration de notre monastère, âgé de plusieurs siècles, notre sœur Marie-Antoinette, ex-violoniste professionnelle, a enregistré des CD. Toutes les recettes sont destinées à la rénovation du monastère.",
    "cd1.title": "CD1 · Vivaldi & Veracini",
    "cd1.desc": "Vivaldi, <em>Les Quatre Saisons</em> ; Veracini, <em>Concert Sonate</em>. Violon et orgue, avec Michael Matthes, célèbre organiste concertiste, enregistré à la Cathédrale de Troyes.",
    "cd2.title": "CD2 · Bach & Haendel",
    "cd2.desc": "Bach, <em>Deux Concertos</em> ; Haendel, <em>Trois Sonates</em>. Violon et orgue, avec Michael Matthes, enregistré à la Cathédrale de Troyes.",
    "cd3.title": "CD3 · Sainte Thaïs",
    "cd3.desc": "La Méditation de l'opéra <em>Thaïs</em> de Jules Massenet et d'autres morceaux au violon enregistrés aux États-Unis par sœur Marie-Antoinette, ainsi qu'une transcription de la Toccata et Fugue en ré mineur de Bach pour violon seul, enregistrée à la Cathédrale Saint-Pierre et Saint-Paul de Troyes.",
    "cd.price": "20 € + 1 € de frais de port", // TR (French site lists 2 € postage; see report)
    "cd.buy": "Acheter par PayPal",
    "cd.buyMissing": "Lien PayPal à ajouter", // TR
    "cd.qtyTitle": "Pour acheter en quantité :",
    "cd.qty": "Quantité", // TR
    "cd.total": "Prix", // TR
    "cd.freeShipping": "frais de port gratuits !",
    "cd.postage": "participation aux frais de port",
    "cd.soon": "Bientôt disponible", // TR
    "shop.albs.title": "Aubes",
    "shop.albs.text": "<p>La confection des aubes pour les prêtres, les enfants de chœur et les professions de foi est une de nos activités principales.</p><p>Des amis couturiers nous ont appris toutes les petites astuces nécessaires à la création d'un vêtement de qualité, et ils ont conçu spécialement pour nous un très beau modèle d'aube pour les prêtres et les diacres. Nos aubes sont de style monastique, faites dans un tissu facile d'entretien qui ne se froisse pas facilement.</p>",
    "shop.albs.soon": "Commandes bientôt disponibles", // TR
    "shop.albs.soonText": "La commande en ligne des aubes est en préparation. Revenez bientôt !", // TR

    "news.kicker": "Actualités",
    "news.title": "Des nouvelles du monastère", // TR
    "news.empty": "Actualités à venir.", // TR
    "news.readMore": "Ouvrir", // TR
    "news.letter.title": "Notre newsletter : <em>Sentinelles de l'Aube</em>",
    "news.letter.text": "Saint Jean-Paul II a invité les jeunes à être des « sentinelles de l'aube ». Adoratrices du Très Saint Sacrement, nous demeurons jour et nuit en présence de notre Roi Eucharistique : c'est pourquoi nous avons emprunté ces mots pour le titre de notre newsletter, tant ils expriment bien notre mode de vie.", // TR
    "news.letter.archive": "Archives de la newsletter (PDF)", // TR
    "news.letter.subscribe": "S'inscrire par e-mail", // TR
    "news.letter.subject": "Inscription à la newsletter", // TR
    "news.letter.note": "Éditions françaises. Passez en anglais pour voir les éditions anglaises.", // TR

    "media.kicker": "Galerie", // TR
    "media.title": "Photos, musique et souvenirs", // TR
    "media.gallery.title": "Les chantiers de restauration de notre monastère",
    "media.gallery.text": "Depuis notre arrivée fin août 2007, les travaux n'ont pas cessé : chapelle rénovée en 2011, restauration des ateliers en 2013, restauration des toitures en 2014-2015. Voici quelques photos.", // TR (partly from the French gallery page)
    "media.audio.title": "À toi Dieu",
    "media.audio.text": "Un court enregistrement du monastère (1'46\").", // TR
    "media.audio.play": "Écouter", // TR
    "media.audio.pause": "Pause",
    "media.video.title": "10 ans de rénovations",
    "media.video.text": "Un aperçu de nos travaux, raconté dans notre newsletter de Pâques 2018.", // TR
    "media.video.cta": "Lire la newsletter de Pâques 2018", // TR
    "media.nd.title": "Notre-Dame de Paris", // TR
    "media.nd.text": "<p>Dans la nuit du 15 avril 2019, un violent incendie a ravagé la cathédrale Notre-Dame de Paris. La flèche s'est effondrée et les deux tiers de la toiture ont été détruits, mais les tours ont été sauvées, ainsi que les reliques précieuses, dont la Couronne d'épines, et le plus grand de tous les trésors, le Très Saint Sacrement.</p><p>Le Vendredi saint, 19 avril 2019, un éditorial d'Étienne de Montety en une du <em>Figaro</em> rappelait qu'une cathédrale, si éblouissante soit-elle, est l'écrin d'un trésor bien plus précieux : Jésus-Christ présent dans le Saint Sacrement, et que l'Église est bâtie d'abord de « pierres vivantes ».</p>", // TR
    "lightbox.close": "Fermer", // TR
    "lightbox.prev": "Photo précédente", // TR
    "lightbox.next": "Photo suivante", // TR

    "visit.kicker": "Visite & contact", // TR
    "visit.title": "Venez et voyez !",
    "visit.text": "Notre monastère est situé au centre-ville de Troyes, à 450 mètres, 2 minutes à pied de la Cathédrale Saint-Pierre et Saint-Paul.",
    "visit.address": "Adresse", // TR
    "visit.phone": "Téléphone", // TR
    "visit.email": "E-mail", // TR
    "visit.languages": "Nous parlons français et anglais !", // TR
    "visit.mapLink": "Ouvrir dans Google Maps", // TR
    "visit.times.title": "Nos horaires",
    "visit.times.note": "Horaires tirés du site français des sœurs. Merci de vérifier auprès du monastère avant de vous déplacer.", // TR
    "visit.prayer.title": "Nous écrire", // TR

    "give.kicker": "Faire un don", // TR
    "give.title": "Aidez-nous à vivre notre vocation", // TR
    "give.text": "Merci de nous aider à pouvoir continuer à répondre à notre vocation d'Adoratrices.",
    "give.online.title": "En ligne, par la Fondation des Monastères", // TR
    "give.online.note": "Avec réduction d'impôt et reçu fiscal pour les donateurs en France. La Fondation des Monastères délivre systématiquement un reçu fiscal.",
    "give.cta": "Faire un don en ligne", // TR
    "give.steps.title": "Comment affecter votre don à notre communauté", // TR
    "give.other.title": "Par virement ou par chèque", // TR
    "give.other.text": "Les dons par virement bancaire ou par chèque sont acceptés du monde entier. Écrivez-nous pour obtenir les coordonnées.", // TR
    "give.other.cta": "Écrire aux sœurs", // TR
    "give.fdm.title": "La Fondation des Monastères",
    "give.fdm.text": "La Fondation des Monastères, fondation reconnue d'utilité publique (14 rue Brunel, 75017 Paris), est habilitée à recevoir les dons, déductibles fiscalement, pour son œuvre de soutien charitable aux membres des communautés religieuses et monastiques. 5 % du montant de votre don est versé à son fonds de solidarité, pour aider d'autres communautés.",
    "give.thanks": "Merci de tout cœur pour votre générosité.",

    "footer.name": "Monastère des Clarisses · Notre-Dame des Anges",
    "footer.motto": "Adoremus in aeternum!"
  }
};

/* ---- Lists that the page builds itself ----------------------------- */

/* Times from the sisters' French site (page "Nos horaires").
   TODO: confirm these are still current. */
window.SCHEDULE = [
  { en: "Weekday Mass",                 fr: "Messe en semaine",          time: { en: "11:00 am", fr: "11 h" } },
  { en: "Sunday Mass",                  fr: "Messe le dimanche",         time: { en: "9:00 am",  fr: "9 h" } },
  { en: "Lauds",                        fr: "Laudes",                    time: { en: "6:20 am",  fr: "6 h 20" } },
  { en: "Terce and Sext",               fr: "Tierce et Sexte",           time: { en: "10:35 am", fr: "10 h 35" } },
  { en: "Office of Readings and None",  fr: "Lectures et None",          time: { en: "2:00 pm",  fr: "14 h" } },
  { en: "Rosary",                       fr: "Chapelet",                  time: { en: "5:00 pm",  fr: "17 h" } },
  { en: "Vespers (Saturday 6:00 pm)",   fr: "Vêpres (samedi 18 h)",      time: { en: "≈ 5:25 pm", fr: "vers 17 h 25" } },
  { en: "Compline",                     fr: "Complies",                  time: { en: "8:00 pm",  fr: "20 h" } },
  { en: "Chapel open for Adoration",    fr: "Chapelle ouverte",          time: { en: "8 am–12 pm & 2–6 pm", fr: "8 h–12 h et 14 h–18 h" } }
];

/* Steps on the Fondation des Monastères donation page */
window.DONATE_STEPS = {
  en: [
    "Open the Fondation des Monastères donation page. At the upper right, switch the language from “Français” to “English”. (All amounts are in euros.)",
    "Under “MY DONATION”, tick the second box: “I want to allocate my donation to a monastic community”. A search box appears.",
    "Type “Clarisses Troyes” and click our name at the top of the list: <strong>MONASTERE DES CLARISSES DE L ADORATION PERPETUELLE (10000 TROYES)</strong>. A blue check mark appears.",
    "Under “MY DETAILS”, enter your name and address.",
    "Under “MY PAYMENT”, choose credit card or check."
  ],
  fr: [
    "Rendez-vous sur la page de dons de la Fondation des Monastères.", // TR
    "Cochez la case « Je préfère consacrer mon don à une communauté monastique ».",
    "Inscrivez « Clarisses de Troyes » dans l'espace de recherche et cliquez sur notre nom : <strong>MONASTERE DES CLARISSES DE L ADORATION PERPETUELLE (10000 TROYES)</strong>.", // TR (partly)
    "Renseignez vos coordonnées.", // TR
    "Choisissez votre moyen de paiement : carte bancaire ou chèque." // TR
  ]
};

/* CD quantity prices (from the English CD page) */
window.CD_QUANTITIES = [
  { qty: 1, price: 20,  postage: 1 },
  { qty: 2, price: 40,  postage: 2 },
  { qty: 3, price: 60,  postage: 3 },
  { qty: 4, price: 80,  postage: 4 },
  { qty: 5, price: 100, postage: 0 }
];

/* Restoration photo gallery (captions from the sisters' sites) */
window.GALLERY = [
  { src: "assets/images/gallery-plaque.jpg",          en: "Monastery of the Poor Clares of Perpetual Adoration, founded in Troyes in 1856", fr: "Monastère des Clarisses de l'Adoration Perpétuelle, fondé en 1856" },
  { src: "assets/images/gallery-altar.jpg",           en: "Installation of the altar",            fr: "Installation de l'autel" },
  { src: "assets/images/gallery-chapel-2011a.jpg",    en: "Restoration of the Chapel in 2011",    fr: "Travaux dans la chapelle, 2011" },
  { src: "assets/images/gallery-chapel-2011c.jpg",    en: "Restoration of the Chapel",            fr: "Restauration de la chapelle" },
  { src: "assets/images/gallery-chapel-2011b.jpg",    en: "Chapel renovated in 2011",             fr: "Chapelle rénovée en 2011" },
  { src: "assets/images/gallery-workrooms-2013a.jpg", en: "Workrooms renovated in 2013",          fr: "Nouveau chantier : nos ateliers, 2013" },
  { src: "assets/images/gallery-workrooms-2013b.jpg", en: "Restoration of workrooms in 2013",     fr: "Rénovation des ateliers, 2013" },
  { src: "assets/images/gallery-work-forward.jpg",    en: "The work moves forward!",              fr: "Les travaux avancent !" },
  { src: "assets/images/gallery-roofs-bad.jpg",       en: "Roofs in bad condition!",              fr: "Les toitures vont très mal !" },
  { src: "assets/images/gallery-roof-ongoing.jpg",    en: "Ongoing restoration of the roof",      fr: "Rénovation en cours !" },
  { src: "assets/images/gallery-midway-2013.jpg",     en: "Midway at the end of 2013!",           fr: "À mi-chemin fin 2013 !" },
  { src: "assets/images/gallery-architect.jpg",       en: "The architect's plans",                fr: "L'architecte et le plan" }
];

/* Newsletter archives. English editions show in English, French in French. */
window.NEWSLETTERS = {
  en: [
    ["January 2020", "2020-01"], ["Christmas 2018", "2018-christmas"], ["Easter 2018", "2018-easter"],
    ["Christmas 2017", "2017-christmas"], ["Easter 2017", "2017-easter"], ["Christmas 2016", "2016-christmas"],
    ["Christmas 2015", "2015-christmas"], ["Spring 2015", "2015-spring"], ["Winter 2015", "2015-winter"],
    ["Easter 2014", "2014-easter"], ["Christmas 2013", "2013-christmas"], ["Autumn 2013", "2013-autumn"],
    ["Christmas 2012", "2012-christmas"], ["Summer 2012", "2012-summer"], ["Christmas 2011", "2011-christmas"],
    ["Easter 2011", "2011-easter"], ["Christmas 2010", "2010-christmas"], ["Summer 2010", "2010-summer"],
    ["Christmas 2009", "2009-christmas"], ["Easter 2009", "2009-easter"], ["Spring 2009", "2009-spring"],
    ["Christmas 2008", "2008-christmas"], ["Summer 2008", "2008-summer"], ["Spring 2008", "2008-spring"],
    ["Christmas 2007", "2007-christmas"]
  ],
  fr: [
    ["Septembre 2023", "2023-09"], ["Juin 2022", "2022-06"], ["Noël 2020", "2020-noel"],
    ["Janvier 2020", "2020-01"], ["Noël 2018", "2018-noel"], ["Pâques 2018", "2018-paques"],
    ["Noël 2017", "2017-noel"], ["Pâques 2017", "2017-paques"], ["Noël 2016", "2016-noel"],
    ["Noël 2015", "2015-noel"], ["Pâques 2015", "2015-paques"], ["Hiver 2015", "2015-hiver"],
    ["Pâques 2014", "2014-paques"], ["Noël 2013", "2013-noel"], ["Automne 2013", "2013-automne"],
    ["Noël 2012", "2012-noel"], ["Été 2012", "2012-ete"], ["Noël 2011", "2011-noel"],
    ["Pâques 2011", "2011-paques"], ["Noël 2010", "2010-noel"], ["Été 2010", "2010-ete"],
    ["Noël 2009", "2009-noel"], ["Automne 2009", "2009-automne"], ["Pâques 2009", "2009-paques"],
    ["Noël 2008", "2008-noel"], ["Été 2008", "2008-ete"], ["Printemps 2008", "2008-printemps"],
    ["Noël 2007", "2007-noel"]
  ]
};
