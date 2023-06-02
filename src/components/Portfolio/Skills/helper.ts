import {FaReact, FaHtml5, FaCss3, FaJs, FaSass} from "react-icons/fa";
import {
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNextdotjs,
  SiReduxsaga,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSolidity,
  SiCypress,
  SiChai,
  SiMocha,
  SiWeb3Dotjs,
  SiGit,
  SiBitbucket,
  SiTrello,
  SiJira,
  SiFirebase,
  SiStrapi,
  SiDocker,
  SiGatsby,
  SiStripe,
  SiSocketdotio,
  SiMui,
} from "react-icons/si";
export const knowledge = [
  {
    type: "Frontend",
    skills: [
      {label: "HTML5", Icon: FaHtml5, color: "#F64A1D"},
      {label: "Javascript (ES6+)", Icon: FaJs, color: "#F2D732"},
      {label: "CSS3", Icon: FaCss3, color: "#28A4D8"},
      {label: "TypeScript", Icon: SiTypescript, color: "#00abf0"},
      {
        label: "Styled Components",
        Icon: SiStyledcomponents,
        color: "#EBA070",
      },
      {label: "Sass", Icon: FaSass, color: "#C76494"},
      {label: "Tailwinds", Icon: SiTailwindcss, color: "#07B0CE"},
      {label: "Bootstrap", Icon: SiBootstrap, color: "#533C78"},
      {label: "MaterialUi", Icon: SiMui, color: "#007FFF"},
      {label: "React", Icon: FaReact, color: "#00abf0"},
      {label: "NextJs", Icon: SiNextdotjs, color: "#fff"},
      {label: "Gatsby", Icon: SiGatsby, color: "#7248B7"},
      {label: "React Native", Icon: FaReact, color: "#00abf0"},
      {label: "Redux", Icon: SiRedux, color: "#7248B7"},
      {label: "Redux Saga", Icon: SiReduxsaga, color: "#949494"},
      {label: "Redux Toolkit", Icon: SiReduxsaga, color: "#949494"},
      {label: "Web3", Icon: SiWeb3Dotjs, color: "#F16822"},
    ],
  },
  {
    type: "Backend",
    skills: [
      {label: "NodeJs", Icon: SiNodedotjs, color: "#8BBF3D"},
      {label: "ExpressJs", Icon: SiExpress, color: "#7E7E7E"},
      {label: "NestJs", Icon: SiNestjs, color: "#D9224C"},
      {label: "MongoDB", Icon: SiMongodb, color: "#6DAD5B"},
      {label: "MySQL", Icon: SiMysql, color: "#E17411"},
      {label: "Postgress", Icon: SiPostgresql, color: "#31648C"},
      {label: "Firebase", Icon: SiFirebase, color: "#FFCA28"},
      {label: "Socket.io", Icon: SiSocketdotio, color: "#F7F7F7"},
      {label: "Strapi", Icon: SiStrapi, color: "#2F2E8B"},
      {label: "Stripe", Icon: SiStripe, color: "#6058F7"},
      {label: "Solidity", Icon: SiSolidity, color: "#363636"},
      {label: "Cypress", Icon: SiCypress, color: "#55C999"},
      {label: "Mocha", Icon: SiMocha, color: "#8D6748"},
      {label: "Chai", Icon: SiChai, color: "#A30701"},
    ],
  },
  {
    type: "Complementary",
    skills: [
      {label: "Docker", Icon: SiDocker, color: "#2496ED"},
      {label: "Git", Icon: SiGit, color: "#F05032"},
      {label: "Bitbucket", Icon: SiBitbucket, color: "#0052CC"},
      {label: "Trello", Icon: SiTrello, color: "#0052CC"},
      {label: "Jira", Icon: SiJira, color: "#0052CC"},
    ],
  },
];
