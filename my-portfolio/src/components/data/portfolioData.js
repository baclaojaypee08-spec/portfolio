// Import your profile picture
import profilePic from "../../assets/Profile.png"; // adjust path if needed
import cvPDF from "../../assets/Curiculum-Vitae-JaypeePBaclao.pdf"; // import PDF

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
    "I am a 4th-year BSIT student and an aspiring web developer.",
    "I enjoy building web applications and designing clean, user-focused UI/UX.",
    "I am actively seeking internships and junior developer roles."
  ]
};

export const techStack = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  Backend: ["Node.js", "Express", "MongoDB"],
  Tools: ["Git", "Figma", "VS Code"],
  Software: ["Windows", "Linux", "MacOS"],
  Design: ["Figma", "Adobe XD", "Sketch"]
};

export const experiences = [
  {
    title: "BS Information Technology – 4th Year",
    company: "La Consolacion University",
    date: { from: "2025", to: "Present" }
  },
  {
    title: "OJT / Internship – Actively Seeking",
    company: "Available for IT Placement",
    date: { from: "2026", to: "2026" }
  },
  {
    title: "Junior Web Developer (Freelance)",
    company: "Personal Projects",
    date: { from: "2025", to: "2026" }
  },
  {
    title: "OJT / Internship – Actively Seeking",
    company: "Available for IT Placement",
    date: { from: "2026", to: "2026" }
  },
  {
    title: "Junior Web Developer (Freelance)",
    company: "Personal Projects",
    date: { from: "2025", to: "2026" }
  },
  {
    title: "Junior Web Developer (Freelance)",
    company: "Personal Projects",
    date: { from: "2025", to: "2026" }
  },
  {
    title: "OJT / Internship – Actively Seeking",
    company: "Available for IT Placement",
    date: { from: "2026", to: "2026" }
  },
  {
    title: "Junior Web Developer (Freelance)",
    company: "Personal Projects",
    date: { from: "2025", to: "2026" }
  }
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website to showcase my skills and projects.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payment integration.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/e-commerce"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application built with WebSocket and Node.js.",
    technologies: ["React", "Socket.io"],
    link: "https://github.com/yourusername/chat-app"
  },
  {
    title: "Chat Application",
    description: "A real-time chat application built with WebSocket and Node.js.",
    technologies: ["React", "Socket.io"],
    link: "https://github.com/yourusername/chat-app"
  }
];

export const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design",
    preview: "/certs/responsive-web-design.jpg",
  },
];

export const contactSections = [
  {
    type: "goal",
    title: "Goal",
    items: [
      "Open to freelance opportunities",
      "Looking for junior frontend roles"
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
      "baclaojaypee08@email.com",
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


