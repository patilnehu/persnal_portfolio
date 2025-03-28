import Netflix from "../assets/projects/Netflix.jpg";
import TaskApp from "../assets/projects/TaskApp.jpg";
import PortfolioApp from "../assets/projects/PortfolioApp.jpg";
import Chatbot from "../assets/projects/Chatbot.png";
import Restaurant from "../assets/projects/Restarunat.png";

export const PROJECTS = [
  //   {
  //     title: "E-Commerce Website",
  //     // image: ,
  //     description:
  //       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  //   },
  {
    title: "Task Management App",
    image: TaskApp,
    description:
      "This Task Management App named 'Tooshi' is a dynamic and user-friendly web application designed to help users efficiently organize, prioritize, and track their tasks. Built with HTML, Tailwind CSS, JavaScript, and React, the app combines clean aesthetics with powerful functionality, offering a seamless task management experience. This Task Management App demonstrates expertise in front-end development, showcasing the ability to build responsive, interactive, and visually appealing applications.",
    technologies: ["HTML", "React", "Javascript", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: PortfolioApp,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.  Built using HTML, Tailwind CSS, React, and JavaScript, the site combines a modern aesthetic with seamless functionality, reflecting both your creativity and technical expertise. This portfolio website serves as a personal branding tool, demonstrating your technical skills, creativity, and professionalism while providing a platform for networking and opportunities.",
    technologies: ["HTML", "React", "Javascript", "Tailwind CSS"],
  },
  {
    title: "Netflix Home Page -Clone",
    image: Netflix,
    description:
      "This project is a replica of the Netflix home page, designed to mimic its sleek and modern user interface using only HTML, CSS and Javascrpit. Clean and organized code structure using semantic HTML5 elements. Stylized using CSS3, including flexbox, grid layout, and animations for hover effects. For signin page the Javascript is used.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Ai Chatbot",
    image: Chatbot,
    description:
      "Developed an AI-powered chatbot using Google's Gemini API, integrated into a modern React application built with Vite for optimized performance. The chatbot provides intelligent and dynamic responses, leveraging AI capabilities to enhance user interactions. The frontend is designed with Tailwind CSS for a sleek and responsive UI. Deployed on Vercel, making the chatbot easily accessible with seamless performance.",
    technologies: ["Javascript", "CSS", "React", "Vite", "Google's Gemini API"],
  },
  {
    title: "Fast Food Restaurant",

    image: Restaurant,
    description:
      "Designed and developed a fully responsive and interactive fast food restaurant website. The platform provides a seamless user experience with an intuitive UI and engaging visuals. A modern, mobile-friendly design with smooth animations and fast-loading pages. Optimized performance and SEO-friendly structure using Next.js.",
    technologies: ["Typescript", "Javascript", "CSS", "Nextjs"],
  },
];
