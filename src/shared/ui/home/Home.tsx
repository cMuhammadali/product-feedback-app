import { Leftbar, Navbar } from "../index";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="flex justify-between h-screen w-full">
      <div className="leftbar w-1/5">
        <Leftbar />
      </div>

      <div className="w-4/5 pt-2 px-8">
        <Navbar />
      </div>
    </div>
  );
};
