import DoneIcon from "../../images/Done.png";
import React, { useState } from "react";

type NavbarFilterProps = {
  handleFilterNavbar: (value: string) => void;
};

export const NavbarFilter: React.FC<NavbarFilterProps> = ({
  handleFilterNavbar,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("Most Upvotes");

  const handleFilter = (value: string) => {
    if (value === "Most Upvotes") {
      handleFilterNavbar("Most Upvotes");
      setActiveFilter("Most Upvotes");
    }
    if (value === "Least Upvotes") {
      handleFilterNavbar("Least Upvotes");
      setActiveFilter("Least Upvotes");
    }
    if (value === "Most Comments") {
      handleFilterNavbar("Most Comments");
      setActiveFilter("Most Comments");
    }
    if (value === "Least Comments") {
      handleFilterNavbar("Least Comments");
      setActiveFilter("Least Comments");
    }
  };

  return (
    <div className="absolute w-64 h-52 top-10 bg-white rounded-xl items-center shadow-xl">
      <h1
        className="p-2 px-4 py-3 items-center filter-border cursor-pointer text-lg flex justify-between"
        onClick={() => handleFilter("Most Upvotes")}
      >
        Most Upvotes{" "}
        {activeFilter === "Most Upvotes" ? (
          <img src={DoneIcon} alt="DoneIcon" className="done-icon" />
        ) : null}
      </h1>
      <h1
        className="p-2 px-4 py-3 items-center pl-4 filter-border cursor-pointer text-lg flex justify-between"
        onClick={() => handleFilter("Least Upvotes")}
      >
        Least Upvotes{" "}
        {activeFilter === "Least Upvotes" ? (
          <img src={DoneIcon} alt="DoneIcon" className="done-icon" />
        ) : null}
      </h1>
      <h1
        className="p-2 px-4 py-3 items-center pl-4 filter-border cursor-pointer text-lg flex justify-between"
        onClick={() => handleFilter("Most Comments")}
      >
        Most Comments{" "}
        {activeFilter === "Most Comments" ? (
          <img src={DoneIcon} alt="DoneIcon" className="done-icon" />
        ) : null}
      </h1>
      <h1
        className="p-2 px-4 py-3 items-center pl-4 filter-text cursor-pointer text-lg flex justify-between"
        onClick={() => handleFilter("Least Comments")}
      >
        Least Comments{" "}
        {activeFilter === "Least Comments" ? (
          <img src={DoneIcon} alt="DoneIcon" className="done-icon" />
        ) : null}
      </h1>
    </div>
  );
};
