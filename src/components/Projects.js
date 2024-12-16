import { PROJECTS } from "../constants";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-t border-stone-900 text-white pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl "
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded"
                src={project.img}
                width={150}
                height={150}
                alt=""
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* <div className=" flex items-center justify-evenly">
        <div className=" w-80 h-52  p-7 ml-5 border-2 border-stone-600 rounded-md hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <h1>Nexby-HR</h1>
          <p className="text-sm pt-2">
            A web application for HR management. Nexby is a AI Solution for HR
            Recruiter. Create a visually appealing and consistent design across
            the website's various components and pages using Tailwind CSS.
          </p>
        </div>

        <div className=" w-80 h-52  p-7 ml-5 border-2 border-stone-600 rounded-md hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <h1>Tooish</h1>

          <p className="pt-2">
            A simple task management app that allows users to create, edit, and
            delete tasks.
          </p>
        </div>
        <div className=" w-80 h-52  p-7 ml-5 border-2 border-stone-600 rounded-md hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <h1>Netflix Home Page -Clone</h1>
          <p className="pt-2">
            A clone of the Netflix home page, built using Html and CSS.
          </p>
        </div>
        <div className=" w-80 h-52  p-7 ml-5 border-2 border-stone-600 rounded-md hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <h1>Face Book Login_Page-Clone</h1>
          <p className="pt-2">
            A clone of the Facebook login page, built using Html CSS and
            Javascript. This project was created will learning javascript.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
