"use client";

// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="bg-white  p-4 bg-opacity-50 backdrop-blur-xl shadow-lg fixed top-0 right-0 left-0 z-10">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <div className="">
            <Link href="/">
              <div className="w-10">
                {" "}
                <Image
                  src="/linkedin.png"
                  alt="Logo"
                  width={35}
                  height={10}
                  className=""
                />
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="bg-white  lg:w-[30%] h-9 border border-gray-500 rounded-full flex items-center p-3">
            <Image
              src="/search-icon.png"
              alt="Logo"
              width={15}
              height={10}
              className=""
            />
            <input
              type="text"
              placeholder="search"
              className="w-full bg-transparent p-2 outline-none border-0 h-2 "
            />
          </div>
          {/* Navigation Links with Image Icons */}
          <div className="hidden lg:flex  space-x-4">
            <Link href="/">
              {" "}
              <div className="flex flex-col items-center">
                <Image
                  src="/home.png" 
                  alt="Home"
                  className="w-6 h-6"
                  width={100}
                  height={0}
                />
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="flex flex-col items-center">
                <Image
                  src="/my-network.png" 
                  alt="About"
                  className="w-6 h-6"
                  width={100}
                  height={0}
                />
                My Network
              </div>
            </Link>
            <Link href="/about">
              <div className="flex flex-col items-center">
                <Image
                  src="/jobs.png" 
                  alt="About"
                  className="w-6 h-6"
                  width={100}
                  height={0}
                />
                Jobs
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex flex-col  items-center">
                <Image
                  src="/messaging.png"
                  alt="Contact"
                  className="w-6 h-6"
                  width={100}
                  height={0}
                />
                Messaging
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex flex-col  items-center">
                <Image
                  src="/notification.png"
                  alt="Contact"
                  className="w-6 h-6"
                  width={100}
                  height={0}
                />
                Notifications
              </div>
            </Link>
          </div>

          {/* Profile Picture with Dropdown Menu */}
          <div className="flex items-center relative mr-5 lg:mr-10">
            <div className="flex flex-col w-12 h-12">
              <Image
                src="/profile-pic.jpg"
                alt="Contact"
                className="object-cover w-full h-full rounded-full ml-6 cursor-pointer"
                onClick={toggleDropdown}
                width={100}
                height={0}
              />
            </div>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="mt-3 bg-white border rounded-md absolute top-10 z-10">
                <Link href="/profile">
                  <div className="block px-4 py-2 text-gray-800">Profile</div>
                </Link>
                <Link href="/settings">
                  <div className="block px-4 py-2 text-gray-800">Settings</div>
                </Link>
                <Link href="/logout">
                  <div className="block px-4 py-2 text-gray-800">Logout</div>
                </Link>
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none text-black">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-sky-50 backdrop-blur-sm shadow-lg bg-opacity-90 z-50 w-60">
          <div className="flex justify-end p-4">
            <button onClick={toggleNavbar} className="focus:outline-none text-black">
              <svg
                className="h-6 w-6"
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
          </div>
          <div className="flex flex-col p-2">
            {/* Mobile menu items */}
            <Link href="/">
              {" "}
              <div className="flex p-2">
                <Image
                  src="/home.png" 
                  alt="Home"
                  className="w-6 h-6 mr-2"
                  width={100}
                  height={0}
                />
                Home
              </div>
            </Link>
            <Link href="">
              <div className="flex p-2">
                <Image
                  src="/my-network.png" 
                  alt="About"
                  className="w-6 h-6 mr-2"
                  width={100}
                  height={0}
                />
                Networking
              </div>
            </Link>
            <Link href="">
              <div className="flex p-2">
                <Image
                  src="/jobs.png" 
                  alt="About"
                  className="w-6 h-6 mr-2"
                  width={100}
                  height={0}
                />
                Jobs
              </div>
            </Link>
            <Link href="">
              <div className="flex p-2">
                <Image
                  src="/messaging.png" 
                  alt="Contact"
                  className="w-6 h-6 mr-2"
                  width={100}
                  height={0}
                />
                Messaging
              </div>
            </Link>          
            <Link href="">
              <div className="flex p-2">
                <Image
                  src="/notification.png" 
                  alt="Contact"
                  className="w-6 h-6 mr-2"
                  width={100}
                  height={0}
                />
                Notifications
              </div>
            </Link>          
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
