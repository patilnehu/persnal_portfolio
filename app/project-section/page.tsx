import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates and team collaboration features.",
    //   technologies: ["React", "Javascript", "Tailwind CSS"],
    //   image: "/TaskApp.jpg",
    //   code: "",
    //   live: "",
    // },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern design principles and smooth animations.",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
      image: "/Portfolio.png",
      code: "https://github.com/patilnehu/persnal_portfolio",
      live: "https://persnal-portfolio-xi.vercel.app/",
    },
    {
      title: "Ai Chatbot",
      description:
        "Developed an AI-powered chatbot using Google's Gemini API, integrated into a modern React application built with Vite for optimized performance. The chatbot provides intelligent and dynamic responses, leveraging AI capabilities to enhance user interactions. The frontend is designed with Tailwind CSS for a sleek and responsive UI. Deployed on Vercel, making the chatbot easily accessible with seamless performance.",
      technologies: [
        "Javascript",
        "CSS",
        "React",
        "Vite",
        "Google's Gemini API",
      ],
      image: "/Chatbot.png",
      code: "https://github.com/patilnehu/ChatBot",
      live: "https://chat-bot-patilnehus-projects.vercel.app",
    },
    {
      title: "Fast Food Restaurant",

      description:
        "Designed and developed a fully responsive and interactive fast food restaurant website. The platform provides a seamless user experience with an intuitive UI and engaging visuals. A modern, mobile-friendly design with smooth animations and fast-loading pages. Optimized performance and SEO-friendly structure using Next.js.",
      technologies: ["Typescript", "Javascript", "CSS", "Nextjs"],
      image: "/Restarunat.png",
      code: "https://github.com/patilnehu/Restaurant-",
      live: "https://restaurant-patilnehus-projects.vercel.app/",
    },
    {
      title: "NGO Management Dashboard",
      description:
        "Built a role-based dashboard using Next.js and Context API with protected routes. Implemented Members and Events CRUD functionality with reusable forms and validation. Integrated API service layer with loading and error handling for better UX. Designed responsive UI using Tailwind CSS and deployed on Vercel.",
      technologies: ["Typescript", "TailwindCSS", "Nextjs", "Vercel"],
      image: "/NGO_Dashboard.png",
      code: "https://github.com/patilnehu/NGO-Management-Dashboard",
      live: "https://ngo-management-dashboard.vercel.app/login",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
                    {project.code && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        asChild
                      >
                        <Link
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" className="flex-1" asChild>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
