// components/Projects.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Quiz App",
    description:
      "A cross-platform mobile quiz application built with React Native, Expo, Firebase, and custom payment integration.",
    github: "https://github.com/yourusername/quiz-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js and Tailwind CSS with sections for About, Skills, Projects, and Contact.",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Backend API with NestJS",
    description:
      "Developed scalable REST APIs with NestJS, PostgreSQL, and TypeORM for managing users, payments, and quizzes.",
    github: "https://github.com/yourusername/nest-backend",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black flex flex-col items-center justify-center px-6 py-12 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>

      <div className="max-w-5xl w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-600 mt-4"
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
