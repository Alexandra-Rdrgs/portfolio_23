import Portfolio from "/src/assets/images/portfolio_2023.png";
import Jtp from "../assets/images/jtp.png";
import ShopAroundMe from "../assets/images/shoparoundme.png";
import Portfolioo from "../assets/images/portfolio_2022.png";
import MisterBin from "../assets/images/mister_bin.png";
import HeroCorp from "../assets/images/hc.png";
import Trombinoscope from "../assets/images/trombi.png";

const ProjectData = [
  /*
  {
    id: "011",
    title: "asa coffee shop",
    subtitle: "",
    categories: ["html", "css", "sass", "react", "javascript", "w3c"],
    image: "",
    images: [],
    date: "Work in progress",
    intro:
      "Création de l'identitée visuelle et d'un site vitrine pour une entreprise de café. Le site est responsive et est compatible avec les navigateurs les plus utilisés. Le site est développé en HTML, CSS, SASS, JavaScript et React. Il est validé par le W3C. Le site est hébergé sur Netlify. ",
    desc: "Création de l'identitée visuelle et d'un site vitrine pour une entreprise de café. Le site est responsive et est compatible avec les navigateurs les plus utilisés. Le site est développé en HTML, CSS, SASS, JavaScript et React. Il est validé par le W3C. Le site est hébergé sur Netlify. ",
    websitelink: "https://Valentin-Morette.github.io/trombinoscope/",
    githublink: "https://github.com/Alexandra-Rdrgs/trombinoscope",
  },*/
  {
    id: "010",
    title: "Portfolio (2023)",
    subtitle: "Refonte du portfolio",
    categories: ["html", "sass", "react", "javascript"],
    technology: ["html", "sass", "react", "javascript"],
    image: Portfolio,
    images: [],
    date: "Janvier 2023",
    intro:
      "Refonte de mon portfolio pour m'aider dans ma recherche d'alternance. Réalisé avec React, il est responsive et est compatible avec les navigateurs les plus utilisés.",
    desc: "Refonte du portfolio en utilisant React. Le site est responsive et est compatible avec les navigateurs les plus utilisés.",
    websitelink: "",
    githublink: "https://github.com/Alexandra-Rdrgs/trombinoscope",
  },
  /*
  {
    id: "009",
    title: "Nealia",
    subtitle: "Réalisation durant stage",
    categories: ["html", "sass", "javascript", "drupal"],
    technology: ["html", "sass", "javascript", "drupal", "animate.css"],
    image: "/src/assets/images/jtp.png",
    images: [],
    date: "October 2022",
    intro:
      "Modificationbs et ajouts suite à la demande de l'entreprise. Le site est réalisé avec Drupal.",
    desc: "",
    websitelink: "https://jtp-courcy.com/",
    githublink: "",
  },*/
  {
    id: "008",
    title: "JTP",
    subtitle: "Réalisé durant stage",
    categories: ["html", "sass", "javascript", "drupal"],
    image: Jtp,
    images: [],
    date: "Octobre 2022",
    intro:
      "Projet réalisé en autonomie lors de mon stage au sein de Retrokube, à destination d'une entreprise de BTP. Il a été réalisé avec Drupal 9, mis en page avec Sass.",
    desc: "",
    websitelink: "https://jtp-courcy.com/",
    githublink: "",
  },
  /* {
    id: "007",
    title: "Checkpoint 4",
    subtitle: "Projet d'évaluation",
    categories: ["html", "w3c"],
    image: "/src/assets/images/checkpoint.png",
    images: [],
    date: "Juillet 2022",
    intro:
      "Projet d'évaluation de fin d'année, réalisé sur deux jours et demi. Projet permettant d'évaluer les compétences acquises par les étudiants durant la formation.",
    desc: "Project servant d'évaluation de fin de formation. C'est le project qui servira à la Wild Code School pour évaluer les compétences acquises par les étudiants, et c'est également le projet qui sert au passage du titre de Dévelopeur web et web mobile. ",
    desc2: "",
    websitelink: "",
    githublink: "https://github.com/Alexandra-Rdrgs/checkpoint-4/",
  },

  {
    id: "006",
    title: "Hackathon Aside",
    subtitle: "",
    categories: ["mongodb"],
    image: "/src/assets/images/aside.png",
    images: [],
    date: "Juillet 2022",
    intro:
      "Deuxième Hackathon en groupe, de la Wild Code School. Réalisé en partenariat avec Aside, ayant pour but de créer un espace de gestion internes pour les employés de l'entreprise.",
    desc: "",
    desc2: "",
    websitelink: "",
    githublink:
      "https://github.com/Alexandra-Rdrgs/2022-03-JS-Reims-hackathon-2-ptits-crackers",
  },*/
  {
    id: "005",
    title: "Shop Around Me",
    subtitle: "Projet partenaire",
    categories: [
      "html",
      "tailwind",
      "react",
      "javascript",
      "express",
      "nodejs",
      "mysql",
    ],
    image: ShopAroundMe,
    images: [],
    date: "Juillet 2022",
    intro:
      "Projet de fin de formation à la Wild Code Scool. Il s'agit d'un projet réalisé en partenariat avec Shop Around Me. Shop around Me est une application web ayant pour but de trouver autour de soi, l'article que l'on recherche.",
    desc: "",
    desc2: "",
    websitelink: "",
    githublink:
      "https://github.com/Alexandra-Rdrgs/2022-03-JS-Reims-project-3-shop-around-me",
  },
  {
    id: "004",
    title: "Portfolio (2022)",
    subtitle: "Projet personnel",
    categories: ["html", "css", "react", "javascript"],
    image: Portfolioo,
    images: [],
    date: "Juin 2022",
    intro:
      "Création de mon premier portfolio dans le cadre de ma recherche de stage de fin de formation de Dévolopeur Web et Web mobile à la Wild Code School. Choix d'une interface simple, aux éléments évoquant le milieu informatique.",
    desc: "",
    desc2: "",
    websitelink: "https://alexandra-rdrgs.com/",
    githublink: "https://github.com/Alexandra-Rdrgs/website-portfolio/",
  },
  {
    id: "003",
    title: "Hackathon : Ecologie",
    subtitle: "Mister Bin",
    categories: ["html", "css", "tailwind", "javascript", "react"],
    image: MisterBin,
    images: [],
    date: "Mai 2022",
    intro:
      "Premier Hackathon à la Wild Code School, réalisé en deux jours. Le thème donné était l'écologie. Nous avons choisi de créer un site web pour sensibiliser les gens à la problématique du tri des déchets.",
    desc: "",
    desc2: "",
    websitelink: "",
    githublink:
      "https://github.com/Alexandra-Rdrgs/2022-03-JS-Reims-hackathon-1-Mister-Bin",
  },
  {
    id: "002",
    title: "Hero Corporation",
    subtitle: "API SuperHeroes",
    categories: ["html", "tailwind", "express", "nodejs", "MySQL"],
    technology: "",
    image: HeroCorp,
    images: [],
    date: "Avril 2022",
    intro:
      "Deuxième projet de groupe à la Wild Code School, réalisé en six semaines. Le but était de nous faire créer une application web dynamique React en utilisant une API. Le groupe a choisit l'API SuperHeroes.",
    desc: "",
    desc2: "",
    websitelink: "https://theodep.github.io/Hero-Corporation/",
    githublink:
      "https://github.com/Alexandra-Rdrgs/2022-03-JS-Reims-project-2-hero-corporation/",
  },
  {
    id: "001",
    title: "Trombisnoscope",
    subtitle: "Promotion 2022",
    categories: ["html", "css", "javascript"],
    technology: ["html", "css", "javascript"],
    image: Trombinoscope,
    images: [],
    date: "Mars 2022",
    intro:
      "Premier projet de groupe à la Wild Code School, réalisé en deux semaines. Ce projet avait pour but d'être une première approche du travail en groupe, et de nous faire découvrir les bases de la programmation. ",
    desc: "Le sujet de cet exercice était la création d'un support pour présenter les membres de notre promotion, avec pmusieurs règles à respecter :  - que le code soit conforme aux normes W3C  - que la structure du site web respecte la sémantique HTML.  Nous avons choisi de créer un trombinoscope, en one-page, avec différentes sections : une première partie trombinoscope, regroupant tous les élèves ainsi qu'un mode aléatoire, permettant d'accèder à la présentation d'un élève choisi de façon aléatoire. ",
    desc2: "",
    websitelink: "https://Valentin-Morette.github.io/trombinoscope/",
    githublink: "https://github.com/Alexandra-Rdrgs/trombinoscope/",
  },
];

export default ProjectData;
