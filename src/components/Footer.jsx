import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import ReviewOnScroll from "./ReviewOnScroll";

const Footer = () => {
  return (
    <section
      
    >
      <ReviewOnScroll>
        <footer className="bg-black text-gray-200 py-10 px-6 flex flex-col justify-center text-center backdrop-blur-lg border-t border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white">Ruchi</h2>
              <p className="mt-2 text-sm text-gray-400">
                Creating digital magic with code & design.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-3">
                Connect with me
              </h3>
              <div className="flex space-x-4 text-lg">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a href="mailto:your@email.com" className="hover:text-blue-400">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Ruchi. All rights reserved.
          </div>
        </footer>
      </ReviewOnScroll>
    </section>
  );
};

export default Footer;
