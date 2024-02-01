import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  paragon,
  crazylister,
  fibo,
  checkpoint,
  docker,
  tau,
  biu
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Software Engineer",
    company_name: "Paragon",
    icon: paragon,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Present",
    points: [
      "Working on a cool cyber attack tool"
    ],
  },
  {
    title: "Software Engineer / Tech Lead",
    company_name: "Fibotax",
    icon: fibo,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - Nov 2021",
    points: [

    ],
  },
  {
    title: "Software Engineer",
    company_name: "CrazyLister",
    icon: crazylister,
    iconBg: "#E6DEDD",
    date: "Mar 2018 - Mar 2020",
    points: [
      "Developing React & Redux web app.",
      "Experience with react hooks and TypeScript.",
      "Backend as Node.js, AWS Lambda and Elasticsearch 6.4.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Checkpoint",
    icon: checkpoint,
    iconBg: "#383E56",
    date: "May 2016 - Apr 2018",
    points: [
      "Experience in Full Stack development. MIS department.",
      "Front-end: JS, jQuery, CSS, HTML5, React. Back-end: Java.",
    ],
  },
];

const education = [
  {
    title: "Master's Degree, Computer Science",
    company_name: "Tel Aviv University",
    icon: tau,
    iconBg: "#E6DEDD",
    date: "2015 - 2018",
    points: [
      "Activities and societies: I served as teaching assistant for Data Structures, Operating Systems, and Multicore Programming courses.",
      "Courses & Seminars: Computational Geometry, Modeling and Matching of 3d Structures, Computational Vision, Program analysis and verification, Multicore Programming, Advanced Algorithms and more.",
      "Research thesis in multicore computing, focusing on coherence protocol optimization.",
    ],
  },
  {
    title: "Bachelor's Degree, Computer Science",
    company_name: "Bar Ilan University",
    icon: biu,
    iconBg: "#E6DEDD",
    date: "2012 - 2015",
    points: [

    ],
  },
];

export { services, technologies, experiences, education };
