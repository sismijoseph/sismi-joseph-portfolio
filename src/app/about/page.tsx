"use client";
import { useState } from "react";
import Skills from '../../components/skills';
import WorkExperience from "@/components/experience";
import Certifications from "@/components/certifications";
import Education from "@/components/education";


export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
    <section
      id="about"
      className="flex flex-col items-center justify-center px-6 py-12 bg-black-50 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      {/* Short Mode */}
      {!expanded ? (
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
          I&apos;m a Software Engineer with 3+ years of experience in building
          cross-platform mobile apps and web applications. I specialize in
          React Native, Expo, Next.js, and NestJS.
        </p>
      ) : (
        // Detailed Mode
        <p className="max-w-3xl text-lg text-off-white-700 leading-relaxed">
          I am a Software Engineer with 3+ years of experience in UI and
          Front-End development. I specialize in cross-platform mobile apps
          using <b>React Native & Expo</b>, web applications with{" "}
          <b>Next.js</b>, and backend services with <b>NestJS & TypeORM</b>. I
          enjoy creating intuitive, high-performance user interfaces and
          building scalable applications that deliver great user experiences.
          <br />
          <br />
          I work with <b>JavaScript, TypeScript, Redux, Firebase,
          Crashlytics, REST APIs,</b> and third-party integrations, giving me a
          strong foundation in end-to-end development. I am comfortable using{" "}
          <b>Android Studio & Gradle</b> and <b>Xcode & Cocoapods</b> for
          mobile apps, while also applying <b>Next.js</b> for web development
          and <b>NestJS with TypeORM</b> for backend systems.
          <br />
          <br />
          Passionate about learning new technologies, I continuously improve my
          skills to deliver innovative and reliable solutions.
        </p>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-6 py-2 text-white rounded-lg shadow  transition"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </section>

    
    <Skills/>
    <WorkExperience/>
    <Education/>
    <Certifications/>
  
    </div>
  );
}
