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
  carrent,
  jobit,
  tripguide,
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
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
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
    date: "Jan 2022 - Jan 2023",
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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, education, projects };
