import React from "react";
import Navbar from "../components/Navbar";
import Space from "../components/Space";
import Overview from "../components/Overview";
import Last from "../components/Last";

const Home = () => {
  return (
    <div className="container mx-auto w-full">
      <Navbar />
      <hr />
      <div className="p-3">
        <h1 className="text-[18px] font-semibold">Customers</h1>
      </div>
      <div className="border p-3 bg-white mb-10">
        <Space />
        <Overview />
        <Last />
      </div>
    </div>
  );
};

export default Home;
