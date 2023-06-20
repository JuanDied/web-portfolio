import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'portfolio', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'welcome to this', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Juan Diego',
  subtitle: "I'm a junior web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/juan-diego-tabares-956aa31a4/?locale=en_US', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'vitrina-shop.jpg',
    title: 'E-commerce sketch',
    info: '',
    info2: '',
    url: 'https://vitrina-shop-999.vercel.app',
    repo: 'https://github.com/JuanDied/VitrinaShop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ml-project.png',
    title: 'Object recognition',
    info: 'In this project, me and my university team, we developed a machine learnining aplication to recognize fruits like banana, apple and oranges. We took a database from kaggle and train again a TensorFlow pre-trained model.',
    info2: '',
    url: '',
    repo: 'https://colab.research.google.com/drive/1g9sIBl0rkg-F5fqxYEyU3sDQVazxxiXu?usp=sharing', // if no repo, the button will not show up
  },
  /* {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/juan-diego-tabares-956aa31a4/?locale=en_US',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JuanDied',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
