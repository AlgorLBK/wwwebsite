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
  gbclogo,
  algormedia,
  landmark_detection,
  hand_gesture,
  text_recognition
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
    id: "/cv.pdf",
    title: "Download CV",
    dwn : "cv.pdf"
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Web/Mobile Developer",
    icon: web,
  },
  
  {
    title: "Database Manager",
    icon: backend,
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
    name: "Expression Decoder",
    description:
      "Machine learning application using camera to detect human bodies and decode expression. Face and pose are detected with connections highlighted in different colors.",
    tags: [
      {
        name: "mediapipe",
        color: "blue-text-gradient",
      },
      {
        name: "open_cv",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: landmark_detection,
    source_code_link: "https://github.com/AlgorLBK/human_facial_expression_decoder",
  },
  {
    name: "Hand Sign Translator",
    description:
      "Artificial Intelligence using google media pipe, pandas, opencv, sklearn, numpy & csv. Frame to frame analysis of the video to deduct the probability and final prediction.",
    tags: [
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
      {
        name: "mediapipe",
        color: "blue-text-gradient",
      },
    ],
    image: hand_gesture,
    source_code_link: "https://github.com/AlgorLBK/hand_sign_alphabet_translator",
  },
  {
    name: "Sentiment Analyzer",
    description:
      "Project using the embedded IBM Watson AI libraries, to create an application that would perform sentiment analysis on a provided text. Natural Language Processing (NLP).",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "IBM_Watson",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
      {
        name: "unittest",
        color: "blue-text-gradient",
      },
    ],
    image: text_recognition,
    source_code_link: "https://github.com/AlgorLBK/text_sentiment_analysis",
  },
];

const capproject = [
  {
    name: "Project Summary",
    description:
      "The RentHub project is a property rental management application designed to streamline the leasing process for both landlords and tenants. It includes features such as property listings, tenant applications, lease management, and a secure payment system.",
  },
  {
    name: "Project Vision",
    description:
      "The vision of the RentHub project is to create a user-centric platform that simplifies the rental process, making it easier for property owners to manage their properties and for tenants to find and rent properties.",
  },
  {
    name: "Project/Business Requirements",
    description:
      "The project requirements include creating a user-friendly interface for property listings, implementing a secure payment system, ensuring scalability for future growth, and providing robust backend functionality for managing leases and tenant information.",
  },
  {
    name: "Project Plan",
    description:
      "The project plan includes defining project scope, identifying key milestones, assigning responsibilities, creating a timeline, and setting up a communication plan to ensure all stakeholders are informed and involved throughout the project.",
  },
  {
    name: "Requirements Analysis and Design",
    description:
      "The requirements analysis and design phase involve gathering and analyzing user requirements, creating wireframes and mockups to visualize the system's interface, and designing the system architecture to meet the project's objectives.",
  },
  {
    name: "System Implementation",
    description:
      "The RentHub application was implemented using the MERN (MongoDB, Express.js, React.js, Node.js) stack, ensuring scalability, security, and performance. Features such as property listings, tenant applications, lease management, and payment processing were implemented to provide a comprehensive solution for property rental management.",
  },
];

export { services, tech, technologies, experiences, testimonials, projects, capproject };
