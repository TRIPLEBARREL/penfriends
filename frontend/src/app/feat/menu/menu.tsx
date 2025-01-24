"use client";

// delete home emnu option

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // function to handle when users click outside menu
  // useEffect with no dependencies means add listener on menu open and remove on close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // check if (DOM element referenced by menuref (menu) is rendered AND DOM element clicked (target) is a child (inside) of menu)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Menu options
  const menuOptions = [
    { label: "Home", path: "/" }, // DELETE THIS LATER
    { label: "Create Letter", path: "/create-letter" },
    { label: "Your Letters", path: "/your-letters" },
    { label: "Shop", path: "/shop" },
    { label: "Profile", path: "/profile" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-10 left-10 z-50 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 flex flex-col justify-between items-center hover:scale-125 transition-transform duration-300"
        aria-label="Open Menu" // alt text
      >
        <span className="block sm:h-1 md:h-1.5 lg:h-2 w-full bg-black rounded-xl"></span>
        <span className="block sm:h-1 md:h-1.5 lg:h-2 w-full bg-black rounded-xl"></span>
        <span className="block sm:h-1 md:h-1.5 lg:h-2 w-full bg-black rounded-xl"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40" // inset-0 => (top right bottom left): 0
        ></div>
      )}

      {/* Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full" // x-0 ---> x-full => menu on left of screen ---> menu off screen
        } transition-transform duration-300 sm:w-1/2 md:w-1/3 lg:w-1/4`}
        style={{
          backgroundColor: "#824670",
          fontFamily: "var(--font-bio-rhyme)",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute bottom-6 right-6 flex items-center gap-2 text-yellow-200 hover:text-yellow-300" // absolute positions button relative to nearest relative parent (menu)
          style={{
            fontSize: "1.75rem",
            fontWeight: "normal",
          }}
        >
          <span>←</span> Back
        </button>

        {/* Menu Items */}
        <ul className="space-y-4 sm:mt-2 md:mt-4 lg:mt-6 sm:px-2 md:px-4 lg:px-6">
          {menuOptions.map((option) => (
            <li
              key={option.label}
              className={`relative text-white font-extrabold cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                // focus for keyboard accessibility
                pathname === option.path
                  ? "text-yellow-300 px-4 py-2"
                  : "hover:text-yellow-200 px-4 py-2"
              }`}
              style={{
                fontFamily: "var(--font-bio-rhyme)",
                fontSize: "clamp(1.5rem, 2vw, 2rem)", // responsive font size
                minHeight: "3rem", // min height for touch targets
              }}
              onClick={() => {
                setIsOpen(false);
                router.push(option.path);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;

/* SCROLLABLE MENU
<div
  ref={menuRef}
  className={`fixed top-0 left-0 h-full z-50 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-y-auto`}
  style={{
    backgroundColor: "#824670",
    fontFamily: "var(--font-bio-rhyme)",
  }}
>
  ...
</div>
*/
