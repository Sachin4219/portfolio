import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  edunet,
  Nakshatra,
  Nomekop,
  DocCare,
  Blog,
  FoodNauts,
  threejs,
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API Designer",
    icon: mobile,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Nakshatra Society NSUT",
    icon: Nakshatra,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js according to design requirements",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Edunet",
    icon: edunet,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with a mentor led team to build solution for real world problems",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DocCare",
    description:
      " Prototype for Web-based telemedicine platform that allows users to search nearby hospitals, book, and manage appointments from various doctors, providing a convenient and efficient solution for health needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: DocCare,
    source_code_link: "https://github.com/Sachin4219/hacknitr",
  },
  {
    name: "Nomekop",
    description:
      "Web application that enables users to view pokemons, search them, add them to favourites. It has a beautiful UI, JWT authentication, search, pagination, responsive design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: Nomekop,
    source_code_link: "https://github.com/Sachin4219/nomekop",
  },
  {
    name: "Tech-byte",
    description:
      "A blogging platform for techies, users can view recent posts, all posts. After logging in users can view their profile add, modify or delete their posts. It has redux Auth state for better structure and performance",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/Sachin4219/TechByte",
  },
  {
    name: "FoodNauts",
    description:
      "Prototype for restaurant website. The application allows users to view all food items or recommendations based on popularity, order food, view their past orders, give feedback etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: FoodNauts,
    source_code_link: "https://github.com/Sachin4219/hackhound",
  },
];

export { services, technologies, experiences, testimonials, projects };
