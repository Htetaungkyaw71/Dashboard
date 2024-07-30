import React from "react";

import {
  FiHome,
  FiActivity,
  FiMap,
  FiPlay,
  FiClock,
  FiSearch,
  FiMail,
  FiMessageCircle,
  FiFileText,
  FiPhone,
} from "react-icons/fi";
import img from "../assets/img.jpg";

import { FiArrowLeft, FiArrowRight, FiTrash } from "react-icons/fi";

const IconButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:bg-gray-100"
    >
      {children}
    </a>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex space-x-2">
      <IconButton href="">
        <FiArrowLeft className="w-4 h-4" />
      </IconButton>
      <IconButton href="">
        <FiArrowRight className="w-4 h-4" />
      </IconButton>
      <IconButton href="">
        <FiTrash className="w-4 h-4" />
      </IconButton>
    </div>
  );
};

const Engagement = () => {
  return (
    <div className="text-gray-500">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-[20px]">Engagement</h1>
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
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div className="p-3 text-gray-500 flex items-center gap-1">
          <FiHome className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            All
          </a>
        </div>
        <div className="border-b-2 p-3 text-blue-500 border-blue-500 flex items-center gap-1">
          <FiMail className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            Email
          </a>
        </div>
        <div className="p-3 text-gray-500 flex items-center gap-1">
          <FiMessageCircle className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            Chats
          </a>
        </div>
        <div className="p-3 text-gray-500 flex items-center gap-1">
          <FiFileText className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            Notes
          </a>
        </div>
        <div className="p-3 text-gray-500 flex items-center gap-1">
          <FiClock className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            Meetings
          </a>
        </div>
        <div className="p-3 text-gray-500 flex items-center gap-1">
          <FiPhone className="h-5 w-5" />
          <a href="" className="max-md:hidden">
            Phone calls
          </a>
        </div>
      </div>

      <div>
        <div className="border w-full flex justify-between items-center p-3 mt-3">
          <div className="flex items-center gap-2">
            <img src={img} alt="image" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-black font-semibold">Danielle</h1>
              <div className="text-[14px]">
                <p>To Lucy Lockwood</p>
                <p>10 June 2024 10AM</p>
              </div>
            </div>
          </div>
          <div>
            <ActionButtons />
          </div>
        </div>
        <div className="border w-full flex justify-between items-center p-3 mt-3">
          <div className="flex items-center gap-2">
            <img src={img} alt="image" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-black font-semibold">Danielle</h1>
              <div className="text-[14px]">
                <p>To Lucy Lockwood</p>
                <p>10 June 2024 10AM</p>
              </div>
            </div>
          </div>
          <div>
            <ActionButtons />
          </div>
        </div>
        <div className="border w-full flex justify-between items-center p-3 mt-3">
          <div className="flex items-center gap-2">
            <img src={img} alt="image" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-black font-semibold">Danielle</h1>
              <div className="text-[14px]">
                <p>To Lucy Lockwood</p>
                <p>10 June 2024 10AM</p>
              </div>
            </div>
          </div>
          <div>
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
