// components/Projects.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js and Tailwind CSS with sections for About, Skills, Projects, and Contact.",
    github: "https://github.com/sismijoseph/sismi-joseph-portfolio",
  },
  {
    title: "Expense Tracker",
    description:
      "A cross-platform mobile app built using React Native and NestJS to manage daily expenses with authentication, data storage, and analytics.",
    github: "https://github.com/sismijoseph/Expense-Tracker",
  },
  {
    title: "Food App",
    description:
      "A full-stack food ordering application built with React.js, Express.js, and MongoDB, featuring user authentication, menu browsing, and order management.",
    github: "https://github.com/sismijoseph/Food-app"
  },
  {
    title: "Blog Application",
    description:
      "A responsive blog website developed using Python (Django) and HTML, featuring CRUD operations and a clean Bootstrap-based UI for reading and managing posts.",
    github: "https://github.com/sismijoseph/blog",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">
        Projects
      </h2>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between w-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.description}
              </p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-600 mt-4 justify-center sm:justify-start"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
