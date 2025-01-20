"use client";

// make responsive to diff screen sizes
// make hamubrger menu icon increase in size when hovered

import React, { useState, useRef, useEffect } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside: created function to handle outside clicks, created global event listener for mouse clicks that calls handle
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
    "Create Letter",
    "Your Letters",
    "Shop",
    "Profile",
    "Contact Us",
  ];

  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-10 left-10 z-50 h-8 w-8 flex flex-col justify-between items-center"
        aria-label="Open Menu" // alt text
      >
        <span className="block h-1.5 w-full bg-black rounded-xl"></span>
        <span className="block h-1.5 w-full bg-black rounded-xl"></span>
        <span className="block h-1.5 w-full bg-black rounded-xl"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-1/4 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        style={{
          backgroundColor: "#824670",
          fontFamily: "var(--font-bio-rhyme)",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute bottom-6 right-6 flex items-center gap-2 text-yellow-200 hover:text-yellow-300"
          style={{
            fontSize: "1.75rem",
            fontWeight: "normal",
          }}
        >
          <span>←</span> Back
        </button>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 px-6">
          {menuOptions.map((option) => (
            <li
              key={option}
              className={`relative text-white font-extrabold cursor-pointer ${
                selectedOption === option
                  ? "text-yellow-300 px-4 py-2"
                  : "hover:text-yellow-200 px-4 py-2" // Hover feedback: lighter yellow
              }`}
              style={{
                fontFamily: "var(--font-bio-rhyme)",
                fontSize: "2rem",
              }}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
