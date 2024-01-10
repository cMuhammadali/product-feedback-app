import DownIcon from "../../images/DownIcon.png";
import VectorImg from "../../images/Vector.png";
import UpIcon from "../../images/UpIcon.png";
import { IPost } from "../../modules/IPost";
import React, { useState } from "react";
import { NavbarFilter } from "../index";
import { Link } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  filterResult: IPost[] | null | undefined;
  handleFilterNavbar: (value: string) => void;
  filterNavbar: string | undefined;
};

export const Navbar: React.FC<NavbarProps> = ({
  filterResult,
  handleFilterNavbar,
  filterNavbar,
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="w-full py-6 px-4 rounded-xl bg-navbar flex justify-between items-center">
      <div className="flex justify-between w-5/12 items-center">
        <div className="flex justify-between items-center">
          <img src={VectorImg} alt="img" className="navbar-img mr-4" />{" "}
          <span className="text-white text-lg ml-2">
            {filterResult?.length === 0 || filterResult?.length === 1
              ? filterResult?.length + " Suggestion"
              : filterResult?.length + " Suggestions"}
          </span>
        </div>
        <div className="flex justify-between relative">
          <span className="mr-1 color-span-text font-thin">Sort by :</span>{" "}
          <span
            className="text-white ml-1 flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpenFilter(!isOpenFilter)}
          >
            <span className="w-32">{filterNavbar}</span>{" "}
            {isOpenFilter ? (
              <img src={UpIcon} alt="down" className="down-icon" />
            ) : (
              <img src={DownIcon} alt="down" className="down-icon" />
            )}
          </span>
          {isOpenFilter && (
            <NavbarFilter handleFilterNavbar={handleFilterNavbar} />
          )}
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
