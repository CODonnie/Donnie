import codLogo1 from "./COD-01.png";
import codlogo2 from "./COD_logo_2.png";
import codround from "./COD_2.png";
import dee1 from "./dee1.png";
import illustrator from "./png/adobeAI.png";
import xd from "./png/adobeXD.png";
import canva from "./png/canva.png";
import css from "./png/css.png";
import docker from "./png/docker.png";
import express from "./png/expressjs.png";
import figma from "./png/figma.png";
import git from "./png/git.png";
import github from "./png/github.png";
import graphql from "./png/graphql.png";
import html from "./png/html.png";
import javascript from "./png/js.png";
import jwt from "./png/jwt.png";
import mongodb from "./png/mongo.png";
import nodejs from "./png/nodejs.png";
import npm from "./png/npm.png";
import postgresql from "./png/postgresql.png";
import photoshop from "./png/ps.png";
import react from "./png/react.png";
import redis from "./png/redis.png";
import sass from "./png/sass.png";
import tailwindcss from "./png/tailwind.png";
import typescript from "./png/ts.png";
import car from "./car.jpg";
import lascaux from "./images/lascaux.jpg";
import osloO from "./images/oslo-opera.jpg";
import oslo from "./images/oslo.jpg";
import shangai from "./images/shanghai.jpg";
import discord from "./contactIcon/discord.png";
import x from "./contactIcon/X.png";
import linkedin from "./contactIcon/linkedin.png";
import whatsapp from "./contactIcon/whatsapp.png";
import githubw from "./contactIcon/github.png";
import discordb from "./contactIcon/discord-black.png";
import xb from "./contactIcon/X-black.png";
import linkedinb from "./contactIcon/linkedin-black.png";
import whatsappb from "./contactIcon/whatsapp-black.png";
import githubb from "./contactIcon/github-black.png";


export const assets = {
  codLogo1,
  codlogo2,
  codround,
  dee1,
  illustrator,
  xd,
  canva,
  css,
  docker,
  express,
  figma,
  git,
  github,
  graphql,
  html,
  javascript,
  jwt,
  mongodb,
  nodejs,
  npm,
  postgresql,
  photoshop,
  react,
  redis,
  sass,
  tailwindcss,
  typescript,
};

export const lightAssets = [
  { icon: x, value: "donnie@twitter.com"},
  { icon: discord, value: "donnie@twitter.com"},
  { icon: linkedin, value: "donnie@twitter.com"},
  { icon: whatsapp, value: "donnie@twitter.com"},
  { icon: githubw, value: "donnie@twitter.com"},
];

export const darkAssets = [
  { icon: xb, value: "donnie@twitter.com"},
  { icon: discordb, value: "donnie@twitter.com"},
  { icon: linkedinb, value: "donnie@twitter.com"},
  { icon: whatsappb, value: "donnie@twitter.com"},
  { icon: githubb, value: "donnie@twitter.com"},
];

export const project = [
  {
    id: "1",
    title: "Streamline",
    type: "development",
    subType: "front-end",
    description:
      "A full-featured streaming web app with user authentication, category-based filtering, and responsive layout.",
    info: "netflix-clone",
    stack: ["React", "Firebase", "TMDB API", "Tailwind CSS"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "https://netflix-clone.vercel.app",
    repoUrl: "https://github.com/CODonnie/netflix-clone",
    tags: ["frontend", "auth", "api"],
    isFeatured: true,
    status: "completed",
    startDate: "01/2025",
    endDate: "02/2025",
  },
  {
    id: "2",
    title: "Jabb",
    type: "development",
    subType: "backend",
    description:
      "A job board API featuring RBAC, tag filtering, and full CRUD functionality for jobs.",
    info: "job-api",
    stack: ["TypeScript", "Express", "MongoDB", "JWT"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "https://github.com/CODonnie/jabb-api",
    tags: ["backend", "RBAC", "API"],
    isFeatured: false,
    status: "completed",
    startDate: "11/2024",
    endDate: "01/2025",
  },
  {
    id: "3",
    title: "Elevate",
    type: "design",
    subType: "graphics design",
    description: "",
    info: "sme-flyer",
    stack: ["Photoshop", "Illustrator"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["flyer", "branding"],
    isFeatured: true,
    status: "completed",
    startDate: "08/2024",
    endDate: "08/2024",
  },
  {
    id: "4",
    title: "Transferly",
    type: "development",
    subType: "backend",
    description:
      "A file-sharing API with link generation, expiration, file versioning, and analytics tracking.",
    info: "wetransfer-clone",
    stack: ["Express", "TypeScript", "MongoDB"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "https://github.com/CODonnie/wetransfer-api",
    tags: ["backend", "file-sharing", "REST"],
    isFeatured: true,
    status: "in-progress",
    startDate: "06/2025",
    endDate: "nil",
  },
  {
    id: "5",
    title: "Flexfolio",
    type: "development",
    subType: "full-stack",
    description:
      "A dynamic portfolio site with CMS-like dashboard to manage projects and update content live.",
    info: "portfolio-cms",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["full-stack", "portfolio"],
    isFeatured: true,
    status: "in-progress",
    startDate: "07/2025",
    endDate: "nil",
  },
  {
    id: "6",
    title: "Budgeto",
    type: "development",
    subType: "full-stack",
    description:
      "A personal finance tracker with category budgets, spending reports, and goal setting.",
    info: "budget-app",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["full-stack", "finance"],
    isFeatured: false,
    status: "planned",
    startDate: "09/2025",
    endDate: "nil",
  },
  {
    id: "7",
    title: "Insightly",
    type: "design",
    subType: "product design",
    description:
      "UI/UX design for a data dashboard product, focusing on clarity, structure, and usability.",
    info: "dashboard-ui",
    stack: ["Figma"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["dashboard", "uiux"],
    isFeatured: false,
    status: "completed",
    startDate: "03/2024",
    endDate: "04/2024",
  },
  {
    id: "8",
    title: "Shortly",
    type: "development",
    subType: "backend",
    description:
      "A URL shortener API with analytics, QR code generation, and redirection tracking.",
    info: "shortener-api",
    stack: ["Express", "TypeScript", "MongoDB"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "https://github.com/CODonnie/url-shortener-api",
    tags: ["backend", "tools"],
    isFeatured: true,
    status: "completed",
    startDate: "04/2025",
    endDate: "05/2025",
  },
  {
    id: "9",
    title: "Clarity",
    type: "design",
    subType: "product design",
    description:
      "A clean, mobile-first UI kit for productivity apps with light/dark themes and reusable components.",
    info: "ui-kit",
    stack: ["Figma"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["uiux", "mobile"],
    isFeatured: false,
    status: "planned",
    startDate: "08/2025",
    endDate: "nil",
  },
  {
    id: '10',
    title: "Aurora",
    type: "design",
    subType: "graphics design",
    description:
      "Brand identity and social media kit design for a fashion label targeting Gen Z.",
    info: "brand-kit",
    stack: ["Illustrator", "Photoshop", "Canva"],
    thumbnail: car,
    image: [lascaux, osloO, oslo, shangai],
    liveUrl: "",
    repoUrl: "",
    tags: ["branding", "social"],
    isFeatured: true,
    status: "completed",
    startDate: "05/2024",
    endDate: "05/2024",
  },
];
