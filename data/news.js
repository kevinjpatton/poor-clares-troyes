/*
  NEWS POSTS: the file to edit each quarter.

  To add a post:
    1. Copy one whole block, from its opening {  to its closing },
    2. Paste it at the TOP of the list (just under  window.NEWS = [ ).
    3. Change the date, the English text and the French text.
    4. For a photo, put the image file in  assets/images/news/  and write
       its name after  image: . No photo? Write  image: ""  instead.
    5. A link (for example a newsletter PDF) is optional. No link? Write
       link: ""  instead.

  Dates:  "2026-03-15"  shows the full date;  "2026-03"  shows only the
  month and year.

  Keep the quotes "..." and the commas exactly as in the other posts.
  In text, use \n\n to start a new paragraph.
*/

window.NEWS = [
  {
    date: "2023-09",
    image: "assets/images/news/sentinels.jpg",
    link: "assets/pdf/fr/2023-09.pdf",
    en: {
      title: "Our September 2023 newsletter",
      text: "Our latest newsletter, Sentinels of the Dawn, September 2023, is available in French.",
      linkText: "Read it (PDF, in French)"
    },
    fr: {
      title: "Notre dernière newsletter de septembre 2023",
      text: "Notre dernière newsletter, Sentinelles de l'Aube de septembre 2023, est disponible.",
      linkText: "La lire (PDF)"
    }
  },
  {
    date: "2020-01",
    image: "assets/images/sisters-in-choir.jpg",
    link: "assets/pdf/en/2020-01.pdf",
    en: {
      title: "Sentinels of the Dawn, January 2020",
      text: "Our January 2020 newsletter, with news from the Monastery.",
      linkText: "Read it (PDF)"
    },
    fr: {
      title: "Sentinelles de l'Aube, janvier 2020",
      text: "Notre newsletter de janvier 2020, avec des nouvelles du monastère.",
      linkText: "La lire (PDF)"
    }
  },
  {
    date: "2018-04",
    image: "assets/images/roof-restoration.jpg",
    link: "assets/pdf/en/2018-easter.pdf",
    en: {
      title: "Ten years of renovations",
      text: "An overview of our progress since 2007: the Chapel, the workrooms, and now the roofs. See our Easter 2018 newsletter.",
      linkText: "Read the Easter 2018 newsletter (PDF)"
    },
    fr: {
      title: "10 ans de rénovations !",
      text: "Un aperçu de nos travaux depuis 2007 : la chapelle, les ateliers, et maintenant les toitures. Voir notre newsletter de Pâques 2018.",
      linkText: "Lire la newsletter de Pâques 2018 (PDF)"
    }
  },
  {
    date: "2014-08-13",
    image: "assets/images/jubilee-2014.jpg",
    link: "",
    en: {
      title: "Silver Jubilee",
      text: "On Wednesday, August 13, 2014, Sister Marie Rosalie and Sister Marie Germaine celebrated the 25th anniversary of their Religious Profession. The Mass of thanksgiving was celebrated in our Chapel by Mgr Marc Stenger, Bishop of Troyes.",
      linkText: ""
    },
    fr: {
      title: "Jubilé d'argent",
      text: "Le mercredi 13 août 2014, sœur Marie Rosalie et sœur Marie Germaine ont fêté le 25e anniversaire de leur profession religieuse. La messe d'action de grâce a été célébrée dans notre chapelle par Mgr Marc Stenger, évêque de Troyes.",
      linkText: ""
    }
  },
  {
    date: "2014-01-11",
    image: "assets/images/fraternity-lunch.jpg",
    link: "",
    en: {
      title: "A Franciscan fraternity at the Monastery",
      text: "A new fraternity of the Secular Franciscan Order was born on January 11, 2014, in association with our Monastery. Come and walk in the footprints of Saint Francis and Saint Clare!\n\nMeetings are held on designated Saturdays: Mass at 11:00 in the Monastery Chapel, a shared lunch (everyone brings a dish), the Office with the sisters at 2:00 pm and a time of discussion, a snack prepared by the sisters, then Vespers. Children are welcome. Contact the Monastery for the next date.",
      linkText: ""
    },
    fr: {
      title: "La fraternité franciscaine",
      text: "La fraternité franciscaine Sainte-Élisabeth-de-Hongrie de Troyes, née en janvier 2014, se rassemble chaque mois au monastère. Nous accueillons toute personne croyante qui souhaite cheminer sur les pas du Christ avec saint François et sainte Claire d'Assise.\n\nMesse à 11 h dans la chapelle, repas partagé (chacun amène un plat), office des sœurs à 14 h puis temps de discussion, goûter préparé par les sœurs, et Vêpres. Les enfants sont les bienvenus. Contactez le monastère pour la prochaine date.",
      linkText: ""
    }
  }
];
