import React from "react";
import {
  FiHome,
  FiClock,
  FiSearch,
  FiMail,
  FiMessageCircle,
  FiFileText,
  FiPhone,
  FiArrowLeft,
  FiArrowRight,
  FiTrash,
} from "react-icons/fi";
import img from "../assets/img.jpg";

const IconButton = ({ href, children }) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:bg-gray-100"
  >
    {children}
  </a>
);

const ActionButtons = () => (
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

const NavigationItem = ({ icon: Icon, label, active }) => (
  <div
    className={`p-3 flex items-center gap-1 ${
      active ? "border-b-2 text-blue-500 border-blue-500" : "text-gray-500"
    }`}
  >
    <Icon className="h-5 w-5" />
    <a href="#" className="max-md:hidden">
      {label}
    </a>
  </div>
);

const Engagement = () => {
  const navItems = [
    { icon: FiHome, label: "All", active: false },
    { icon: FiMail, label: "Email", active: true },
    { icon: FiMessageCircle, label: "Chats", active: false },
    { icon: FiFileText, label: "Notes", active: false },
    { icon: FiClock, label: "Meetings", active: false },
    { icon: FiPhone, label: "Phone calls", active: false },
  ];

  const engagementItems = [
    { name: "Danielle", recipient: "Lucy Lockwood", date: "10 June 2024 10AM" },
    { name: "Danielle", recipient: "Lucy Lockwood", date: "10 June 2024 10AM" },
    { name: "Danielle", recipient: "Lucy Lockwood", date: "10 June 2024 10AM" },
  ];

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
        {navItems.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>

      <div>
        {engagementItems.map((item, index) => (
          <div
            key={index}
            className="border w-full flex justify-between items-center p-3 mt-3"
          >
            <div className="flex items-center gap-2">
              <img src={img} alt="profile" className="w-10 h-10 rounded-full" />
              <div>
                <h1 className="text-black font-semibold">{item.name}</h1>
                <div className="text-[14px]">
                  <p>To {item.recipient}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
            <ActionButtons />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engagement;
