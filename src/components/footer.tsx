// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          Developed by Sismi Joseph
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/sismijoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sismi-joseph-43b250196/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:sismijoseph1997@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
