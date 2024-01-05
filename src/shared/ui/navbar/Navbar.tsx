import DownIcon from "../../images/DownIcon.png";
import VectorImg from "../../images/Vector.png";
import UpIcon from "../../images/UpIcon.png";
import React, { useState } from "react";
import { NavbarFilter } from "../index";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="w-full py-6 px-4 rounded-xl bg-navbar flex justify-between items-center">
      <div className="flex justify-between w-5/12 items-center">
        <div className="flex justify-between items-center">
          <img src={VectorImg} alt="img" className="navbar-img mr-4" />{" "}
          <span className="text-white text-lg ml-2">6 Suggestions</span>
        </div>
        <div className="flex justify-between relative">
          <span className="mr-1 color-span-text font-thin">Sort by :</span>{" "}
          <span
            className="text-white ml-1 flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpenFilter(!isOpenFilter)}
          >
            <span className="mr-2">Most Upvotes</span>{" "}
            {isOpenFilter ? (
              <img src={UpIcon} alt="down" className="down-icon ml-1" />
            ) : (
              <img src={DownIcon} alt="down" className="down-icon ml-1" />
            )}
          </span>
          {isOpenFilter && <NavbarFilter />}
        </div>
      </div>

      <div className="items-center">
        <Link to={"/add-feedback"}>
          <button className="text-white add-feedback py-4 px-6 rounded-xl">
            + Add Feedback
          </button>
        </Link>
      </div>
    </div>
  );
};
