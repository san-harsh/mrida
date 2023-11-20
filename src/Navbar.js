/* eslint-disable react/prop-types */
import { useState } from "react";

// SidePanel component
const SidePanel = () => {
  return (
    <ul className="pt-4 text-sm text-gray-700 md:flex md:justify-between items-center flex md:pt-0">
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          About Mrida
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Our Work
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Get Involved
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          News & Events
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Contact Us
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Blog
        </a>
      </li>
      <li>
        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
          Search Button
        </a>
      </li>
      <li className="md:p-4 py-2 block top-2">
        <button
          onClick={console.log("Donate Btn Clicked")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm"
        >
          Donate
        </button>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const toggleSidePanel = () => {
    setIsSidePanelOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 font-semibold bg-white">
        <div>
          <a href="#">Image</a>
        </div>

        <svg
          onClick={toggleSidePanel}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            isSidePanelOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <SidePanel />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
