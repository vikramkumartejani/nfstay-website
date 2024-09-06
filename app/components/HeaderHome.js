"use client";
import React, { useState, useEffect, useRef } from "react";

const HeaderHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-gray-600 body-font">
      <div className="max-w-[1200px] mx-auto flex p-5 items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 h-[32px]">
          <img src="/assets/logo.svg" alt="logo" />
        </a>

        {/* Hamburger Button for Mobile Menu */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation + Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex space-x-4 text-[16px] leading-[20.16px] text-primary-color font-[500]">
            <a className="hover:text-gray-900">How it works</a>
            <a className="hover:text-gray-900">Features</a>
            <a className="hover:text-gray-900">Marketplace</a>
            <a className="hover:text-gray-900">Advantages</a>
            <a className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="inline-flex gap-[22px]">
            <button className="font-[600] text-[16px] leading-[20.16px] text-[#9945FF] py-[14.5px] px-[37px] bg-white border border-[#9945FF] rounded-full">
              Login
            </button>
            <button
              className="text-white font-[600] text-[16px] leading-[20.16px] py-[14.5px] px-[37px] rounded-full"
              style={{
                background:
                  "linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)",
              }}
            >
              Invest Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 transform bg-white w-2/3 max-w-xs p-5 lg:hidden flex flex-col items-center space-y-6 shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="self-end text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col items-center space-y-4 text-[16px] leading-[20.16px] text-primary-color font-[500]">
            <a className="hover:text-gray-900">How it works</a>
            <a className="hover:text-gray-900">Features</a>
            <a className="hover:text-gray-900">Marketplace</a>
            <a className="hover:text-gray-900">Advantages</a>
            <a className="hover:text-gray-900">FAQ</a>
          </nav>

          {/* Buttons */}
          <div className="inline-flex lg:flex-row flex-col gap-[22px] w-fit">
            <button className="font-[600] text-[16px] leading-[20.16px] text-[#9945FF] py-[14.5px] px-[37px] bg-white border border-[#9945FF] rounded-full">
              Login
            </button>
            <button
              className="text-white w-max font-[600] text-[16px] leading-[20.16px] py-[14.5px] px-[37px] rounded-full"
              style={{
                background:
                  "linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)",
              }}
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
