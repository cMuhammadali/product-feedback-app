import React from "react";
import "./Leftbar.css";

export const Leftbar: React.FC = () => {
  return (
    <div className="h-screen p-2">
      <div className="w-full leftbar-radial p-4 rounded-xl pt-20 pb-8">
        <h1 className="text-white text-xl mb-1">Frontend Mentor</h1>
        <h3 className="text-white mb-1">Feedback Board</h3>
      </div>

      <div className="w-full bg-white p-4 rounded-xl mt-8">
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons">All</button>
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons ml-4">
          UI
        </button>
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons ml-4">
          UX
        </button>
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons mt-4">
          Enhancement
        </button>
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons ml-4 mt-4">
          Bug
        </button>
        <button className="px-4 py-2 rounded-xl bg-leftbar-buttons mt-4">
          Feature
        </button>
      </div>

      <div className="w-full bg-white p-4 rounded-xl mt-8">
        <div className="flex justify-between">
          <h1 className="text-xl">Roadmap</h1>
          <h3 className="text-leftbar-color cursor-pointer">View</h3>
        </div>

        <div className="mt-8">
          <div className="flex justify-between mt-4">
            <div className="flex justify-between">
              <span className="px-3 py-1 bg-leftbar rounded-full"></span>{" "}
              <h3 className="text-last-h3 text-left ml-4">Planned</h3>
            </div>
            <h2>2</h2>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex justify-between">
              <span className="px-3 py-1 bg-leftbar2 rounded-full"></span>{" "}
              <h3 className="text-last-h3 text-left ml-4">In-Progress</h3>
            </div>{" "}
            <h2>3</h2>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex justify-between">
              <span className="px-3 py-1 bg-leftbar3 rounded-full"></span>{" "}
              <h3 className="text-last-h3 text-left ml-4">Live</h3>
            </div>{" "}
            <h2>1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
