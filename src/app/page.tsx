import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/navBar"
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "@/components/footer";
import Projects from "./project/page";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
    <Navbar/>
      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col md:flex-row bg-black-50 items-center justify-center min-h-screen text-center md:text-left p-0 gap-12"
      >
        {/* Profile Photo */}
        <div className="w-48 h-48">
          <Image
            src="/images/me.jpeg"
            alt="Sismi Joseph"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text + Social Links */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Hi, I&apos;m Sismi Joseph 👋</h1>
          <p className="mt-4 text-xl text-white">
            Software Engineer | React Native | Next.js | NestJS | Expo | TypeScript | JavaScript
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/sismi-joseph-43b250196/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </main>
      
        <About />
<Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}
