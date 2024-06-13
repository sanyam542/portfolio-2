import { x } from "../assets";
import { gmail } from "../assets";
import { linkedin } from "../assets";
import { github } from "../assets";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  ashoshi,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blogPage,
  imgGallery,
  getSocial,
  priceWatch,
  nextjs,
  express,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next Js",
    icon: nextjs,
    dark: true,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
    dark: true,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Ashoshi",
    icon: ashoshi,
    iconBg: "#e1e1e3",
    date: "Sep 2023 - Present",
    points: [
      "Leading full-stack development using Next.js, TypeScript, and Tailwind CSS",
      "Implementing Docker for efficient containerization.",
      "Managing databases with MySQL/MariaDB",
      "Using GitLab for version control and project management.",
      "Collaborating with cross-functional teams to design, develop, and deploy software solutions tailored to client's business needs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  // {
  //   name: "AI  Saas",
  //   description:
  //     "Fully functional social-media web application with features like post, follow/unfollow, like/unlike posts, user register and login, chat and much more.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "webscraping",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: priceWatch,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Price Watch",
    description:
      "A web application that tracks Amazon product prices using web scraping, notifying users of price drops and alerting competitors when products go out of stock using cron jobs.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: priceWatch,
    live_link: "https://price-watch-web-scraper.vercel.app/",
    source_code_link: "https://github.com/sanyam542/price-watch-web-scraper",
  },
  {
    name: "Get Social",
    description:
      "Fully functional social-media web application with features like post, follow/unfollow, like/unlike posts, user register and login, chat and much more.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: getSocial,
    live_link: "https://social-media542.netlify.app/",
    source_code_link: "https://github.com/sanyam542/SocialMedia",
  },
  {
    name: "Image Gallery",
    description:
      "Image gallery in which users can browse images. Search specific topic of images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "unsplashapi",
        color: "pink-text-gradient",
      },
    ],

    image: imgGallery,
    live_link: "https://image-gallery-542.netlify.app/",
    source_code_link: "https://github.com/sanyam542/image-gallery",
  },
  {
    name: "Blog Page",
    description:
      "Express app that enables users to save blogs and their daily journal.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blogPage,
    live_link: "https://blogpage-m7rp.onrender.com/",
    source_code_link: "https://github.com/sanyam542/blog_page",
  },
];

const socials = [
  {
    name: "Gmail",
    image: gmail,
    link: "mailto:sanyamsingh5421@gmail.com",
  },
  {
    name: "Linked In",
    image: linkedin,
    link: "https://www.linkedin.com/in/sanyam542/",
  },
  {
    name: "X (Twitter)",
    image: x,
    link: "https://x.com/SanyamS5422",
  },
  {
    name: "Github",
    image: github,
    link: "https://github.com/sanyam542",
  },
];

export { services, technologies, experiences, projects, socials };
