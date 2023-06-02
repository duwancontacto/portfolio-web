import {Project} from "@/types/models/Project";
import {FaCss3, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import RockPapper from "@/assets/Projects/rock-papper-scissors.png";
import Sprocket from "@/assets/Projects/sprocket-finantial.png";
import Darling from "@/assets/Projects/darling.jpeg";
import ProjectOffice from "@/assets/Projects/Projectoffice.png";
import Hfma from "@/assets/Projects/hfma.png";
import Algoritmo from "@/assets/Projects/algoritmo.png";
import Wetokie from "@/assets/Projects/wetokie.png";
import ItpVoice from "@/assets/Projects/itpvoice.png";
import Peronio from "@/assets/Projects/Peronio.png";
import Munda from "@/assets/Projects/Munda.png";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiReduxsaga,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
  SiGatsby,
  SiMysql,
  SiBootstrap,
  SiStripe,
  SiSocketdotio,
  SiDocker,
  SiMui,
  SiStyledcomponents,
  SiCypress,
} from "react-icons/si";
export const projects: Project[] = [
  {
    name: "ALGORITMO - FULLSTACK",
    description:
      "Web and mobile application that builds cutting-edge digital solutions to improve businesses and products",
    overview: "https://www.algoritmo.co/",
    image: Algoritmo,
    duration: "2022/11 – Actualidad",
    skills: [
      {label: "TypeScript", Icon: SiTypescript, color: "#00abf0"},
      {label: "CSS3", Icon: FaCss3, color: "#28A4D8"},
      {label: "HTML5", Icon: FaHtml5, color: "#F64A1D"},
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "NextJs", Icon: SiNextdotjs, color: "#fff"},
      {label: "Tailwinds", Icon: SiTailwindcss, color: "#07B0CE"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Saga", Icon: SiReduxsaga, color: "#949494"},
      {label: "Socket.io", Icon: SiSocketdotio, color: "#F7F7F7"},
      {label: "NodeJs", Icon: SiNodedotjs, color: "#8BBF3D"},
      {label: "ExpressJs", Icon: SiExpress, color: "#7E7E7E"},
      {label: "MongoDB", Icon: SiMongodb, color: "#6DAD5B"},
      {label: "MySQL", Icon: SiMysql, color: "#E17411"},
      {label: "Docker", Icon: SiDocker, color: "#2496ED"},
    ],
  },
  {
    name: "WETOKIE - FULLSTACK",
    description:
      "Web platform for tokenized investments for real assets through blockchain technology and Nft tokens",
    overview: "https://wetokie.io/",
    duration: "2022/08 – 2023/03",
    image: Wetokie,
    skills: [
      {label: "TypeScript", Icon: SiTypescript, color: "#00abf0"},
      {label: "CSS3", Icon: FaCss3, color: "#28A4D8"},
      {label: "HTML5", Icon: FaHtml5, color: "#F64A1D"},
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "NextJs", Icon: SiNextdotjs, color: "#fff"},
      {label: "MaterialUi", Icon: SiMui, color: "#007FFF"},
      {label: "Redux Toolkit", Icon: SiReduxsaga, color: "#949494"},
      {label: "Socket.io", Icon: SiSocketdotio, color: "#F7F7F7"},
      {label: "NodeJs", Icon: SiNodedotjs, color: "#8BBF3D"},
      {label: "NestJs", Icon: SiNestjs, color: "#D9224C"},
      {label: "MongoDB", Icon: SiMongodb, color: "#6DAD5B"},
      {label: "Docker", Icon: SiDocker, color: "#2496ED"},
      {label: "Solidity", Icon: SiSolidity, color: "#363636"},
      {label: "Web3", Icon: SiWeb3Dotjs, color: "#F16822"},
      {label: "Cypress", Icon: SiCypress, color: "#55C999"},
    ],
  },
  {
    name: "ITP VOICE - FRONTEND",
    description:
      "Cloud communications platform, capable of receiving and sending calls in a browser, messaging systems, and user management",
    overview: "https://itpvoice.net/",
    duration: "2020/10 – 2022/10",
    image: ItpVoice,
    skills: [
      {label: "CSS3", Icon: FaCss3, color: "#28A4D8"},
      {label: "HTML5", Icon: FaHtml5, color: "#F64A1D"},
      {label: "Javascript (ES6+)", Icon: FaJs, color: "#F2D732"},
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "Bootstrap", Icon: SiBootstrap, color: "#533C78"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Saga", Icon: SiReduxsaga, color: "#949494"},
      {label: "Socket.io", Icon: SiSocketdotio, color: "#F7F7F7"},
    ],
  },
];
export const freelanceProjects: Project[] = [
  {
    name: "MUNDA - FRONTEND",
    description:
      "Saas Mobile application oriented to the courses about diferents topics.",
    overview: "https://dev.munda.club/",
    duration: "2022/03 – 2023/05",
    image: Munda,

    skills: [
      {label: "TypeScript", Icon: SiTypescript, color: "#00abf0"},
      {
        label: "Styled Components",
        Icon: SiStyledcomponents,
        color: "#EBA070",
      },
      {label: "React Native", Icon: FaReact, color: "#00abf0"},
      {label: "Redux Toolkit", Icon: SiReduxsaga, color: "#949494"},
    ],
  },
  {
    name: "SPROCKET - FRONTEND",
    description:
      "Web and Mobile application oriented to the banking management of currencies and cryptocurrencies.",
    overview: "https://sprocket.financial/",
    duration: "2022/09 – 2023/03",
    image: Sprocket,

    skills: [
      {label: "TypeScript", Icon: SiTypescript, color: "#00abf0"},
      {label: "CSS3", Icon: FaCss3, color: "#28A4D8"},
      {label: "HTML5", Icon: FaHtml5, color: "#F64A1D"},
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "NextJs", Icon: SiNextdotjs, color: "#fff"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Toolkit", Icon: SiReduxsaga, color: "#949494"},
      {label: "React Native", Icon: FaReact, color: "#00abf0"},
    ],
  },
  {
    name: "PERONIO - FRONTEND",
    description:
      "Landing page to connect blockchain wallet into your mobile application.",
    overview: "https://cerulean-madeleine-dd721c.netlify.app/",
    image: Peronio,
    duration: "2022/08 – 2022/09",
    skills: [
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "Tailwinds", Icon: SiTailwindcss, color: "#07B0CE"},
      {label: "Web3", Icon: SiWeb3Dotjs, color: "#F16822"},
    ],
  },
  {
    name: "DARLING WAIFU - FRONTEND",
    description: "Web application of NFT game on the Binance Smart Chain.",
    overview: "http://ww12.darlingwaifu.com/",
    image: Darling,
    duration: "2022/02 – 2022/08",
    skills: [
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Gatsby", Icon: SiGatsby, color: "#7248B7"},
      {label: "Tailwinds", Icon: SiTailwindcss, color: "#07B0CE"},
      {label: "Solidity", Icon: SiSolidity, color: "#363636"},
      {label: "Web3", Icon: SiWeb3Dotjs, color: "#F16822"},
      {label: "Cypress", Icon: SiCypress, color: "#55C999"},
    ],
  },
  {
    name: "PROJECT OFFICE - FULLSTACK",
    description:
      "App mobile oriented to management and supervision of services and projects.",
    overview: "https://projectoffice.io/",
    image: ProjectOffice,
    duration: "2021/4 – 2021/12",
    skills: [
      {label: "React Native", Icon: FaReact, color: "#00abf0"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Saga", Icon: SiReduxsaga, color: "#949494"},
      {label: "NodeJs", Icon: SiNodedotjs, color: "#8BBF3D"},
      {label: "ExpressJs", Icon: SiExpress, color: "#7E7E7E"},
      {label: "MySQL", Icon: SiMysql, color: "#E17411"},
    ],
  },
  {
    name: "HFMA - FULLSTACK",
    description:
      "SaaS web application oriented to the creation and management of websites for lawyers.",
    image: Hfma,
    overview: "http://hfma.es/",
    duration: "2020/7 – 2021/2 ",
    skills: [
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "NextJs", Icon: SiNextdotjs, color: "#fff"},
      {label: "Bootstrap", Icon: SiBootstrap, color: "#533C78"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Saga", Icon: SiReduxsaga, color: "#949494"},
      {label: "NodeJs", Icon: SiNodedotjs, color: "#8BBF3D"},
      {label: "ExpressJs", Icon: SiExpress, color: "#7E7E7E"},
      {label: "MongoDB", Icon: SiMongodb, color: "#6DAD5B"},
      {label: "Stripe", Icon: SiStripe, color: "#6058F7"},
    ],
  },
];
