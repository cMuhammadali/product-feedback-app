import React, { useState } from "react";
import "./Leftbar.css";

interface LeftbarProps {
  handleFilter: (type: string) => void;
}

export const Leftbar: React.FC<LeftbarProps> = ({ handleFilter }) => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (type: string) => {
    if (type === "All") {
      setActiveButton("All");
      handleFilter("All");
    }
    if (type === "UI") {
      setActiveButton("UI");
      handleFilter("UI");
    }
    if (type === "UX") {
      setActiveButton("UX");
      handleFilter("UX");
    }
    if (type === "Enhancement") {
      setActiveButton("Enhancement");
      handleFilter("Enhancement");
    }
    if (type === "Bug") {
      setActiveButton("Bug");
      handleFilter("Bug");
    }
    if (type === "Feature") {
      setActiveButton("Feature");
      handleFilter("Feature");
    }
  };

  return (
    <div className="h-screen p-2">
      <div className="w-full leftbar-radial p-4 rounded-xl pt-20 pb-8">
        <h1 className="text-white text-xl mb-1">Frontend Mentor</h1>
        <h3 className="text-white mb-1">Feedback Board</h3>
      </div>

      <div className="w-full bg-white p-4 rounded-xl mt-8">
        <button
          className={
            activeButton === "All"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons"
          }
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className={
            activeButton === "UI"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active ml-4"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons ml-4"
          }
          onClick={() => handleClick("UI")}
        >
          UI
        </button>
        <button
          className={
            activeButton === "UX"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active ml-4"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons ml-4"
          }
          onClick={() => handleClick("UX")}
        >
          UX
        </button>
        <button
          className={
            activeButton === "Enhancement"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active mt-4"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons mt-4"
          }
          onClick={() => handleClick("Enhancement")}
        >
          Enhancement
        </button>
        <button
          className={
            activeButton === "Bug"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active ml-4 mt-4"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons ml-4 mt-4"
          }
          onClick={() => handleClick("Bug")}
        >
          Bug
        </button>
        <button
          className={
            activeButton === "Feature"
              ? "px-4 py-2 rounded-xl bg-leftbar-buttons-active mt-4"
              : "px-4 py-2 rounded-xl bg-leftbar-buttons mt-4"
          }
          onClick={() => handleClick("Feature")}
        >
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
