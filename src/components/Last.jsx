import React from "react";
import Engagement from "./Engagement";
import Contacts from "./Contacts";

const Last = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="border p-3 xl:w-[680px] w-full 2xl:w-full">
          <Engagement />
        </div>
        <div className="border p-3 xl:ml-[50px] 2xl:ml-0">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Last;
