import React from "react";
import { FiPlus } from "react-icons/fi";

const Badge = ({ text, bgColor, textColor }) => (
  <span
    className={`ml-2 ${bgColor} ${textColor} text-[14px] p-1 px-2 rounded-md max-sm:text-[10px]`}
  >
    {text}
  </span>
);

const InfoItem = ({ value, label }) => (
  <div className="border text-center text-gray-500 p-3">
    <h1>{value}</h1>
    <p>{label}</p>
  </div>
);

const Space = () => {
  return (
    <div className="border">
      <div className="flex lg:justify-between gap-3 flex-col lg:flex-row items-center p-3">
        <div className="flex items-center">
          <h1 className="font-semibold text-[18px] max-sm:text-[15px]">
            Global Space X
          </h1>
          <Badge
            text="Important"
            bgColor="bg-green-200"
            textColor="text-green-500"
          />
          <Badge
            text="new customers"
            bgColor="bg-blue-200"
            textColor="text-blue-500"
          />
          <span className="ml-3 cursor-pointer">
            <FiPlus className="w-5 h-5" />
          </span>
        </div>
        <div>
          <b>CRM:</b>
          <span className="ml-2 text-gray-500">Mike Begley</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 gap-5">
        <InfoItem value="5" label="Customers Meetings" />
        <InfoItem value="10" label="Tasks Due" />
        <InfoItem value="3" label="Messages For Review" />
        <InfoItem value="5" label="Activities Logged" />
        <InfoItem value="6" label="Messages Sent" />
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
