"use client";

// improve style (below)
// square and larger menu icon
// larger font following global font delcarations
// more left padding
// larger vertical spacing
// hover highlight also follows changes

import React, { useState, useRef, useEffect } from "react";

// useRef => render persistent refer
// useEffect => hook that runs effect on change

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
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
        aria-label="Open Menu"
      >
        ☰
      </button>

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
        className={`fixed top-0 left-0 w-4/5 max-w-xs h-full z-50 bg-purple-800 text-yellow-100 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Back Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-yellow-200 flex items-center gap-2 px-4 py-2 hover:text-yellow-300"
        >
          <span>←</span> Back
        </button>

        {/* Menu Items */}
        <ul className="mt-8 space-y-4 px-4">
          {menuOptions.map((option) => (
            <li
              key={option}
              className={`text-lg font-bold cursor-pointer ${
                selectedOption === option
                  ? "bg-yellow-300 text-purple-800 px-2 py-1 rounded-md"
                  : "hover:bg-yellow-200 hover:text-purple-800"
              }`}
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
