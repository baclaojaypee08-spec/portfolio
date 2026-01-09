// Import your profile picture
import profilePic from "/profile.png"; // adjust path + filename
import cvPDF from "../../assets/Curiculum-Vitae-JaypeePBaclao.pdf";

import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const profile = {
  name: "Jaypee P. Baclao",
  location: "Daet, Philippines",
  role: "BSIT Student / Aspiring Web Developer",
  profilePic,
  buttons: [
    { text: "View CV", href: cvPDF, type: "primary", newTab: true, icon: HiOutlineDocumentText},
    { text: "Send Email", href: "mailto:baclaojaypee08@gmail.com", type: "secondary", icon: HiOutlineMail},
  ],
};

export const about = {
  paragraphs: [
    "I am a 4th-year BSIT student and an aspiring web developer focused on building practical and engaging web solutions.",
    "I specialize in developing responsive web applications with an emphasis on clean design and great user experience.",
    "I am actively looking for internships and junior developer roles to further sharpen my skills in real-world projects."
  ]
};

export const techStack = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS"
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman"
  ],
  Design: [
    "Figma",
    "Adobe XD",
    "Canva"
  ],
  Concepts: [
    "Responsive Design",
    "REST APIs",
    "UI/UX Principles",
    "Version Control"
  ]
};


export const experiences = [
  {
    title: "OJT / Internship (Actively Seeking)",
    company: "Open for IT Placement",
    date: { from: "2026", to: "Present" },
    responsibilities: [
      "Willing to learn and assist in web development, IT support, or software-related tasks",
      "Open to gaining hands-on experience with real-world systems and team collaboration",
      "Eager to apply academic knowledge in a professional environment"
    ]
  },
  {
    title: "Junior Web Developer (Freelance / Personal Projects)",
    company: "Self-Directed Projects",
    date: { from: "2025", to: "2026" },
    responsibilities: [
      "Developed responsive web applications using React and Tailwind CSS",
      "Built reusable components and implemented clean UI/UX designs",
      "Integrated basic backend functionality using Node.js and REST APIs",
      "Used Git and GitHub for version control and project management"
    ]
  }
];


export const projects = [
  // =====================
  // SYSTEM / WEB PROJECTS
  // =====================
  {
    title: "PP&E Management System",
    description:
      "A Property, Plant, and Equipment (PP&E) management system used to track assets, monitor status, and maintain organized records.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "Private Repository"
  },
  {
    title: "RFID-Based Vehicle Pass System",
    description:
      "A vehicle access monitoring system using RFID technology to log vehicle entry and exit for security and traffic monitoring.",
    technologies: ["React", "Node.js", "RFID", "REST APIs"],
    link: "Private Repository"
  },
  {
    title: "CRV Express Logistics Inventory Management System",
    description:
      "An inventory management system for a logistics company to track stock levels and support daily warehouse operations.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "Private Repository"
  },

  // =====================
  // UI / UX DESIGN (FIGMA)
  // =====================
  {
    title: "JJ Burger – UI Design",
    description:
      "A food ordering UI design created in Figma, focusing on clear product presentation and smooth user flow.",
    technologies: ["Figma", "UI Design", "UX"],
    link: "Available upon request"
  },
  {
    title: "Hotel Booking App – UI Design",
    description:
      "A hotel booking application UI design with room listings, booking flow, and a clean, modern layout.",
    technologies: ["Figma", "Wireframing", "Prototyping"],
    link: "Available upon request"
  },
  {
    title: "Banking App – UI Design",
    description:
      "A banking application UI design focused on usability, accessibility, and clear financial information layout.",
    technologies: ["Figma", "UI Design", "Accessibility"],
    link: "Available upon request"
  }
];


export const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Covers HTML, CSS, Flexbox, Grid, and building responsive layouts.",
    link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design",
    preview: "/certs/responsive-web-design.jpg",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    description:
      "Focuses on core JavaScript concepts including ES6, algorithms, and data structures.",
    link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures",
    preview: "/certs/responsive-web-design.jpg",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024",
    description:
      "Covers modern front-end libraries such as React and state management basics.",
    link: "https://www.freecodecamp.org/certification/yourusername/front-end-development-libraries",
    preview: "/certs/responsive-web-design.jpg",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Online Course",
    date: "2024",
    description:
      "Introduces UI/UX principles, wireframing, prototyping, and usability best practices.",
    link: null,
    preview: "/certs/responsive-web-design.jpg",
  }
];


export const contactSections = [
  {
    type: "learning",
    title: "Learning Goals",
    items: [
      "Deepen my understanding of React and component architecture",
      "Improve UI/UX design skills using Figma",
      "Learn best practices for performance and accessibility",
      "Gain experience working with real-world APIs"
    ]
  },
  {
    type: "social",
    title: "Social Links",
    items: [
      { label: "GitHub", url: "https://github.com/jaypeeBaclao", icon: FaGithub },
      { label: "LinkedIn", url: "https://linkedin.com/in/jaypeeBaclao", icon: FaLinkedin }
    ]
  },
  {
    type: "contact",
    title: "Contact",
    items: [
      "baclaojaypee08@gmail.com",
      "+63 9925391303"
    ]
  }
];

export const gallery = [
  {
    id: 1,
    src: "/gallery/1.jpg",
    alt: "Portfolio website design"
  },
  {
    id: 2,
    src: "/gallery/2.jpg",
    alt: "Dashboard UI"
  },
  {
    id: 3,
    src: "/gallery/3.jpg",
    alt: "Mobile app design"
  },
  {
    id: 4,
    src: "/gallery/4.jpg",
    alt: "Landing page"
  },
  {
    id: 5,
    src: "/gallery/5.jpg",
    alt: "Admin panel"
  },
  {
    id: 6,
    src: "/gallery/6.jpg",
    alt: "E-commerce UI"
  },
  {
    id: 7,
    src: "/gallery/7.jpg",
    alt: "Portfolio website design"
  },
  {
    id: 8,
    src: "/gallery/8.jpg",
    alt: "Dashboard UI"
  },
  {
    id: 9,
    src: "/gallery/9.jpg",
    alt: "Mobile app design"
  },
  {
    id: 10,
    src: "/gallery/10.jpg",
    alt: "Landing page"
  }
];


