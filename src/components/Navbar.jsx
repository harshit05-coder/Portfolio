import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
        >
          Tech Enthusiast
        </a>

        <ul className="hidden md:flex gap-10">
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#education"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Education
          </a>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </ul>
        <ul className="hidden md:flex gap-5">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <a
              href="https://www.linkedin.com/in/harshitsingh123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <a
              href="https://github.com/harshit05-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
            <a
              href="https://www.instagram.com/harshitsingh23oct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <BsTwitterX />
            </a>
          </li>
        </ul>

        {isOpen ? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}
        {isOpen && (
          <div
            className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              <a
                href="#home"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </a>
              <a
                href="#education"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Education
              </a>
              <a
                href="#tech"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </a>
              <a
                href="#projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </a>
              <a
                href="#resume"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </a>
            </ul>
            <ul className="flex flex-wrap gap-5">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/harshitsingh123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <a
                  href="https://github.com/harshit05-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a
                  href="https://www.instagram.com/harshitsingh23oct/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
