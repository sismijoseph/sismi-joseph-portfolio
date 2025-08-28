import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/navBar";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "@/components/footer";
import Projects from "./project/page";

export default function Home() {
  return (
    <div className="bg-black text-white md:pt-10 sm:pt-0">

      <Navbar />

      <main
        id="home"
        className="flex flex-col bg-black md:flex-row items-center justify-center text-center md:text-left p-6 md:p-12 gap-8 md:gap-14"
      >

        <div className="w-40 h-40 md:w-48 md:h-48 mb-6 md:mb-0">
          <Image
            src="/images/me.jpeg"
            alt="Sismi Joseph"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg"
          />
        </div>


        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I&apos;m Sismi Joseph 👋
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            Software Engineer | React Native | Next.js | NestJS | Expo | TypeScript | JavaScript
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/sismi-joseph-43b250196/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl md:text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sismijoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 text-2xl md:text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="/Sismi_Joseph-Resume.pdf"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition text-sm md:text-base"
            >
              Resume
            </a>
          </div>
        </div>
      </main>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
