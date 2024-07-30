import React from "react";
import { FiMoreVertical, FiSearch, FiStar, FiTrash } from "react-icons/fi";
import img from "../assets/img.jpg";

const ContactCard = ({ name, location, role }) => (
  <div className="border p-3 mt-3">
    <div className="flex justify-between items-center">
      <div className="flex items-start gap-3">
        <div className="flex gap-3 items-center">
          <img src={img} alt="profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-black">{name}</h1>
            <p className="text-[14px]">{location}</p>
          </div>
        </div>
        <span className="bg-purple-200 text-[12px] p-1 px-2 rounded-md text-purple-500">
          {role}
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <a href="#">
          <FiStar className="h-5 w-5" />
        </a>
        <a href="#">
          <FiTrash className="h-5 w-5" />
        </a>
        <a href="#">
          <FiMoreVertical className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);

const Contacts = () => {
  const contacts = [
    { name: "John Doe", location: "Austin", role: "Employee" },
    { name: "John Doe", location: "Austin", role: "Employee" },
    { name: "John Doe", location: "Austin", role: "Employee" },
    { name: "John Doe", location: "Austin", role: "Employee" },
  ];

  return (
    <div className="text-gray-500">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-[20px]">Contacts</h1>
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
      <div>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            location={contact.location}
            role={contact.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
