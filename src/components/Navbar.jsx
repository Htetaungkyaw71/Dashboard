import React, { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import img from "../assets/img.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center justify-between p-3 my-4 ">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="relative w-full max-w-xs sm:max-w-none sm:flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 border rounded-md w-full sm:w-64"
          />
        </div>
        <button className="text-gray-500 sm:hidden ml-3" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`flex-col sm:flex-row ${
          menuOpen ? "flex" : "hidden"
        } sm:flex items-center gap-4 sm:gap-6 w-full sm:w-auto mt-4 sm:mt-0`}
      >
        <a href="#" className="text-gray-500 flex items-center gap-1">
          <FiBell className="h-5 w-5" />
          <span>Notifications</span>
        </a>
        <a href="#" className="text-gray-500 flex items-center gap-1">
          <FiHelpCircle className="h-5 w-5" />
          <span>Help Center</span>
        </a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-500 flex items-center gap-1 focus:outline-none"
          >
            <img src={img} alt="image" className="w-10 h-10 rounded-full" />
            <span>Danna Morris</span>
            <FiChevronDown className="h-5 w-5" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
