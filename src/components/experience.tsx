// components/WorkExperience.tsx
"use client";
import React from "react";

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    role: "React Native Developer",
    company: "Reidis Interactive",
    location: "Dubai, UAE",
    duration: "Feb 2025 – Present",
    points: [
      "Collaborated with an experienced software engineering team to enhance backend development and research analysis.",
      "Gained expertise in team leadership, requirement analysis, estimation, design, implementation, and testing.",
      "Contributed to building scalable backend solutions and conducting technical research to support efficient decision-making.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Reubro International",
    location: "Kerala, India",
    duration: "Sep 2023 – Jan 2025",
    points: [
      "Worked as an individual software engineer responsible for the complete development lifecycle.",
      "Created wireframes, developed mobile applications, tested functionality, and reviewed source code.",
    ],
  },
  {
    role: "React Native Developer",
    company: "iROID Technologies",
    location: "Kerala, India",
    duration: "May 2021 – Jul 2023",
    points: [
      "Collaborated with a skilled engineering team on mobile app development projects.",
      "Gained hands-on experience in different components of app architecture and implementation.",
    ],
  },
];

export default function WorkExperience() {
  return (
  <section
  id="experience"
  className="py-12 flex flex-col items-center justify-center px-6 bg-black-50 text-gray-900"
>
      <h2 className="text-4xl font-bold mb-12 text-white">Work Experience</h2>
      <div className="max-w-4xl w-full space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-grey-900 shadow-lg rounded-2xl p-6 border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
            <p className="text-lg text-white">
              {exp.company} – {exp.location}
            </p>
            <p className="text-sm text-white mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-white">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
