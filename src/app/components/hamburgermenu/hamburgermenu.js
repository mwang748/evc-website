"use client";
import "../../../styles/globals.css";
import "./hamburg.css";

import Link from "next/link";
import { useState } from "react";

function Menu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`absolute left-0 top-16 w-full menu ${isOpen ? "isOpen" : ""}`}
      style={{ backgroundColor: "#07407B" }}
    >
      <ul className="flex flex-col gap-2 p-4 justify-center items-center">
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/">
            HOME
          </Link>
        </li>
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/about">
            ABOUT
          </Link>
        </li>
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/team">
            OUR TEAM
          </Link>
        </li>
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/cars">
            OUR CARS
          </Link>
        </li>
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/sponsors">
            SPONSORS
          </Link>
        </li>
        <li className="transition duration-300 hover:text-[#F7931E]">
          <Link onClick={() => setIsOpen(false)} href="/contacts">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <button onClick={toggleNavbar}>
        <div id="nav-icon1" className={isOpen ? "isOpen" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {<Menu isOpen={isOpen} />}
    </nav>
  );
}
