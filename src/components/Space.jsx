import React from "react";
import { FiPlus } from "react-icons/fi";

const Space = () => {
  return (
    <div className="border ">
      <div className="flex lg:justify-between gap-3 flex-col lg:flex-row items-center p-3">
        <div className="flex items-center">
          <h1 className="font-semibold text-[18px] max-sm:text-[15px]">
            Global Space X
          </h1>
          <span className="ml-2 md:ml-7 max-sm:text-[10px] bg-green-200 text-[14px]  p-1 px-2 rounded-md text-green-500">
            Important
          </span>
          <span className="ml-2 bg-blue-200 max-sm:text-[10px] text-[14px] p-1 px-2 rounded-md text-blue-500">
            new customers
          </span>
          <span className="ml-3 cursor-pointer">
            <FiPlus className="w-5 h-5" />
          </span>
        </div>
        <div>
          <b>CRM:</b>
          <span className="ml-2 text-gray-500">Mike Begley</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  p-5 gap-5">
        <div className="border text-center text-gray-500 p-3">
          <h1>5</h1>
          <p>Customers Meetings</p>
        </div>
        <div className="border text-center text-gray-500 p-3">
          <h1>10</h1>
          <p>Tasks Due</p>
        </div>
        <div className="border text-center text-gray-500 p-3">
          <h1>3</h1>
          <p>Messages For Review</p>
        </div>
        <div className="border text-center text-gray-500 p-3">
          <h1>5</h1>
          <p>Activites Logged</p>
        </div>
        <div className="border text-center text-gray-500 p-3">
          <h1>6</h1>
          <p>Messages Sent</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-3">
        <div></div>
        <div>
          <span className="text-gray-500">
            Location: New York, US Activity: 4/12/24 10:00am CST
          </span>
        </div>
      </div>
    </div>
  );
};

export default Space;
