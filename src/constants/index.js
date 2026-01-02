import {
  mobile,
  backend,
  creator,
  web,
  python,
  gbclogo,
  apple,
  intact,
  algormedia,
  landmark_detection,
  hand_gesture,
  text_recognition,
  reza,
  weather,
  smp1,
  smp2,
  smp3,
  numpy,
  pandas,
  scikit,
  matplotlib,
  flask,
  hadoop,
  sql,
  tensorflow,
  tableau
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
    id: "/ALGOR LOMBAKO.pdf",
    title: "Résumé",
    dwn : "ALGOR LOMBAKO.pdf"
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
    name: "Python",
    icon: python,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
]

const technologies = [
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Hadoop",
    icon: hadoop,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Teacher Assistant - Tutor",
    company_name: "George Brown College",
    icon: gbclogo,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - April 2024",
    points: [
      "Courses : Introduction To Web Development / Introduction to Full Stack Programming.",
      "Conducting lab sessions where students can practice coding exercises, debug their code, and ask questions in a more interactive environment.",
      "Assisting students with technical issues related to programming tools, development environments, or specific programming languages.",
      "Supporting the instructor during lectures by explaining concepts, assisting with demonstrations, or answering students' questions.",
      "Leading smaller group discussions or tutorials to reinforce key concepts covered in lectures and help students with problem-solving.",
    ],
  },
  {
    title: "Bilingual Technical Advisor II",
    company_name: "Apple",
    icon: apple,
    iconBg: "#E6DEDD",
    date: "May 2024 - Sep 2025",
    points: [
      "Assisting customers with complex technical issues related to Apple products and services, ensuring timely and effective resolutions.",
      "Interacting with customers in their preferred language, delivering clear and concise guidance to enhance their experience.",
      "Diagnosing and troubleshooting hardware and software problems, utilizing advanced technical knowledge to identify solutions.",
      "Maintaining detailed records of customer interactions and technical issues to contribute to knowledge bases and improve service quality.",
      "Working closely with cross-functional teams, including engineering and product development, to address recurring technical challenges and improve product performance.",
    ],
  },
  {
    title: "SME - Auto Claims",
    company_name: "Intact Insurance",
    icon: intact,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Reviewing and processing auto insurance claims by analyzing accident reports, photos, and customer statements.",
      "Communicating with policyholders, drivers, and repair shops to gather accurate information and provide claim updates.",
      "Evaluating vehicle damage and estimating repair costs in accordance with policy coverage and company guidelines.",
      "Determining claim eligibility, liability, and settlement amounts while ensuring compliance with insurance regulations.",
      "Maintaining detailed and accurate claim documentation to support timely resolutions and improve claims efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Something outstanding about him is his relentless pursuit of knowledge and innovation. He eagerly delved into advanced data analysis techniques, mastered intricate machine learning algorithms, and determinedly explored the realms of AI applications. Algor's ability to grasp and apply complicated concepts in practical scenarios is commendable.",
    name: "Doctor Reza DIBAJ",
    designation: "Applied Data Science & Applied Machine Learning Teacher",
    company: "George Brown College",
    image: reza,
  }
];

const projects = [
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
        name: "opencv",
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
        name: "ibmwatson",
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
  {
    name: "Weather Predictor",
    description:
      "Machine Learning application using Neural Prophet to forecast weather conditions for the next 1200 days (Toronto). Using a Kaggle dataset : Canada weather from 1940 to 2009.",
    tags: [
      {
        name: "neuralProphet",
        color: "blue-text-gradient",
      },
      {
        name: "kaggle",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/AlgorLBK/WeatherPredictorTor",
  },
  {
    name: "Algor Media",
    description:
      "Mobile-based application implementing social media functions like sign up, log in, create and view posts. Messaging also developed. Android and iOS.",
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

const cappsamples = [
  {
    image: smp2
  },
  {
    image: smp3
  },
  {
    image: smp1
  },
]

export { services, tech, technologies, experiences, testimonials, projects, capproject, cappsamples };
