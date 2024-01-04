import DoneIcon from "../../images/Done.png";
import React from "react";

export const NavbarFilter: React.FC = () => {
  return (
    <div className="absolute w-64 h-52 top-10 bg-white rounded-xl items-center shadow-xl">
      <h1 className="p-2 px-4 py-3 items-center filter-border cursor-pointer text-lg flex justify-between">
        Most Upvotes <img src={DoneIcon} alt="DoneIcon" className="done-icon" />
      </h1>
      <h1 className="p-2 px-4 py-3 items-center pl-4 filter-border cursor-pointer text-lg flex justify-between">
        Least Upvotes
      </h1>
      <h1 className="p-2 px-4 py-3 items-center pl-4 filter-border cursor-pointer text-lg flex justify-between">
        Most Comments
      </h1>
      <h1 className="p-2 px-4 py-3 items-center pl-4 filter-text cursor-pointer text-lg flex justify-between">
        Least Comments
      </h1>
    </div>
  );
};
