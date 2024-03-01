import {
  mobile,
  backend,
  creator,
  web,
  angular,
  aspnet,
  csharp,
  java,
  javascript,
  mongodb,
  mysql,
  nodejs,
  php,
  postgresql,
  python,
  reactjs,
  swift,
  jobit,
  tripguide,
  gbclogo,
  algormedia
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "/public/cv.pdf",
    title: "Download CV",
    dwn : "cv.pdf"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Database Manager",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const tech = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Asp.NET",
    icon: aspnet,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
]

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "ReactJS/Native",
    icon: reactjs,
  },
  {
    name: "Swift",
    icon: swift,
  },
];

const experiences = [
  {
    title: "Teacher Assistant",
    company_name: "George Brown College",
    icon: gbclogo,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Courses : Introduction To Web Development / Introduction to Full Stack Programming.",
      "Conducting lab sessions where students can practice coding exercises, debug their code, and ask questions in a more interactive environment.",
      "Assisting students with technical issues related to programming tools, development environments, or specific programming languages.",
      "Supporting the instructor during lectures by explaining concepts, assisting with demonstrations, or answering students' questions.",
    ],
  },
  {
    title: "Tutor",
    company_name: "George Brown College",
    icon: gbclogo,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Conducting regular office hours to provide additional help and clarification to students who may be struggling with the course material.",
      "Developing additional learning resources, such as code examples, tutorials, or documentation, to supplement course materials.",
      "Leading smaller group discussions or tutorials to reinforce key concepts covered in lectures and help students with problem-solving.",
      "Offering encouragement and motivation to students, especially those facing challenges in learning programming concepts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Algor proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Algor does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Algor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Algor Media",
    description:
      "Mobile-based application implementing basic social media functions like sign up, log in, create and view posts. Messaging still in development. Android and iOS.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: algormedia,
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

export { services, tech, technologies, experiences, testimonials, projects };
