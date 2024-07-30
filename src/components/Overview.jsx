import React from "react";
import {
  FiHome,
  FiActivity,
  FiMap,
  FiPlay,
  FiClock,
  FiInfo,
} from "react-icons/fi";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressBar = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-3 my-4">
    <div
      className="bg-blue-600 h-3 rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

const Overview = () => {
  const data = {
    labels: ["Today's Meetings", "Tasks Due", "Tickets Due", "Active Plays"],
    datasets: [
      {
        data: [30, 30, 30, 30],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const QuickActionItem = ({ label }) => (
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-300"></div>
        <span>{label}</span>
      </div>
      <div className="bg-gray-300 w-6 h-6 rounded-full flex justify-center items-center">
        <span className="text-[14px]">1</span>
      </div>
    </div>
  );

  const ChartLegendItem = ({ label, percentage }) => (
    <div className="flex justify-between gap-3 items-center mt-2">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-300"></div>
        <span>{label}</span>
      </div>
      <span className="text-gray-500">{percentage}%</span>
    </div>
  );

  return (
    <div className="text-gray-500 mt-3">
      <div className="flex items-center gap-3">
        <div className="border-b-2 p-3 text-blue-500 border-blue-500 flex items-center gap-1">
          <FiHome className="h-5 w-5" />
          <a href="#" className="max-md:hidden">
            Overview
          </a>
        </div>
        {["Usage", "Customer journey", "Plays", "Timeline"].map(
          (item, index) => (
            <div
              className="p-3 text-gray-500 flex items-center gap-1"
              key={index}
            >
              {index === 0 && <FiActivity className="h-5 w-5" />}
              {index === 1 && <FiMap className="h-5 w-5" />}
              {index === 2 && <FiPlay className="h-5 w-5" />}
              {index === 3 && <FiClock className="h-5 w-5" />}
              <a href="#" className="max-md:hidden">
                {item}
              </a>
            </div>
          )
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        <div className="p-3 border my-5">
          <h1 className="flex gap-2 items-center">
            <span>Quick Actions</span>
            <FiInfo />
          </h1>
          <div className="p-3">
            {[
              "Today's Meeting",
              "Tasks Due",
              "Tickets Due",
              "Active Plays",
            ].map((item, index) => (
              <QuickActionItem label={item} key={index} />
            ))}
          </div>
        </div>

        <div className="p-3 border my-5 xl:w-[350px] w-full 2xl:w-full">
          <h1 className="flex gap-2 items-center">
            <span>CTAS</span>
            <FiInfo />
          </h1>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="w-20 h-20">
                <Pie data={data} options={options} />
              </div>
              <div>
                {[
                  "Today's Meeting",
                  "Tasks Due",
                  "Tickets Due",
                  "Active Plays",
                ].map((item, index) => (
                  <ChartLegendItem label={item} percentage={30} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 border my-5 xl:ml-[45px] ml-0 2xl:ml-0">
          <h1 className="flex gap-2 items-center">
            <span>Renewal Date</span>
            <FiInfo />
          </h1>
          <div className="text-center p-3 px-5 mt-3">
            <h1>15 November</h1>
            <ProgressBar percentage={50} />
            <p>Your Annual License will expire in 30 days</p>
          </div>
        </div>

        <div className="p-3 border my-5">
          <h1 className="flex gap-2 items-center">
            <span>Total Users</span>
            <FiInfo />
          </h1>
          <div className="text-center p-3 px-5 mt-3">
            <h1 className="font-bold text-[20px]">
              130K{" "}
              <span className="text-red-400 font-normal text-[12px]">2k</span>
            </h1>
            <p className="mt-2">
              Total Users added in this month compare to previous months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
