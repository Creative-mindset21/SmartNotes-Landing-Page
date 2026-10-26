import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import radialCircle from "../assets/circle-gradient.png";

import { navLinks } from "../util/data";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Features");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (title) => {
    setActiveLink(title);
    setIsOpen(false);
  };

  return (
    <header>
      <div className="header-box">
        <a href="#" className="flex items-center gap-2 font-semibold text-xl">
          <img src={logo} alt="SmartNodes Logo" />
          Smart Nodes
        </a>

        {/* Small Devices */}
        <nav
          className={`absolute top-22 right-0 h-[60vh] w-full bg-primary-400 shadow-lg shadow-white/5 pt-20 pl-10 transition-all ease-in-out lg:hidden ${isOpen ? "translate-x-0 visible opacity-100" : "translate-x-full hidden opacity-0"}`}
        >
          <img
            src={radialCircle}
            alt=""
            aria-hidden="true"
            className="absolute rotate-180 -right-30 -top-30 pointer-events-none"
          />
          <ul className="flex flex-col space-y-4 md:space-y-12 w-3/4">
            {navLinks.map(({ title, href }, id) => (
              <li
                key={id}
                className="border-b border-b-text-color pb-4 last-of-type:border-b-0"
              >
                <a
                  href={href}
                  className={`nav-links-sm md:text-2xl  ${activeLink === title ? "text-gradient" : ""}`}
                  onClick={() => handleLinkClick(title)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Large Devices */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-14">
            {navLinks.map(({ title, href }, id) => (
              <li key={id}>
                <a
                  href={href}
                  className="nav-links-lg hover:text-gradient transition-colors duration-300"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="flex flex-col gap-1.5 cursor-pointer lg:hidden"
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 h-0.5 bg-text-color transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-text-color transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-text-color transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <button className="btn hidden lg:flex">
          Get Started <img src={arrow} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
