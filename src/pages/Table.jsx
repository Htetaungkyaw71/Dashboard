import React from "react";
import Navbar from "../components/Navbar";
import { FiDownload, FiPlus, FiSearch } from "react-icons/fi";
import ContentTable from "../components/ContentTable";

const Table = () => {
  return (
    <div className="container mx-auto w-full relative">
      <Navbar />
      <hr />
      <div>
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
          </div>
          <div className={`flex items-center gap-2 `}>
            <a
              href="#"
              className="text-white rounded-md text-[14px] p-2 bg-blue-500 flex items-center gap-1"
            >
              <FiDownload className="h-5 w-5" />
              <span>Export Lead</span>
            </a>
            <a
              href="#"
              className="text-white rounded-md text-[14px] p-2 bg-blue-500 flex items-center gap-1"
            >
              <FiPlus className="h-5 w-5" />
              <span>Add Leads</span>
            </a>
          </div>
        </div>
      </div>
      <ContentTable />
    </div>
  );
};

export default Table;
