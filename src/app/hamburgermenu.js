"use client";
import "../styles/globals.css";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Menu() {
  return (
    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md p-4">
      <ul className="flex flex-col space-y-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
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
        {isOpen ? (
          <Menu />
        ) : (
          <Image
            className="invert"
            src="/hamburgermenu.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        )}
      </button>
    </nav>
  );
}

// #nav-icon4 span:nth-child(1) {
//     top: 0px;
//     -webkit-transform-origin: left center;
//     -moz-transform-origin: left center;
//     -o-transform-origin: left center;
//     transform-origin: left center;
//   }

//   #nav-icon4 span:nth-child(2) {
//     top: 18px;
//     -webkit-transform-origin: left center;
//     -moz-transform-origin: left center;
//     -o-transform-origin: left center;
//     transform-origin: left center;
//   }

//   #nav-icon4 span:nth-child(3) {
//     top: 36px;
//     -webkit-transform-origin: left center;
//     -moz-transform-origin: left center;
//     -o-transform-origin: left center;
//     transform-origin: left center;
//   }

//   #nav-icon4.open span:nth-child(1) {
//     -webkit-transform: rotate(45deg);
//     -moz-transform: rotate(45deg);
//     -o-transform: rotate(45deg);
//     transform: rotate(45deg);
//     top: -3px;
//     left: 8px;
//   }

//   #nav-icon4.open span:nth-child(2) {
//     width: 0%;
//     opacity: 0;
//   }

//   #nav-icon4.open span:nth-child(3) {
//     -webkit-transform: rotate(-45deg);
//     -moz-transform: rotate(-45deg);
//     -o-transform: rotate(-45deg);
//     transform: rotate(-45deg);
//     top: 39px;
//     left: 8px;
//   }
