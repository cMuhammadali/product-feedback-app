import NotFoundImg from "../../images/NotFound.png";
import { Link } from "react-router-dom";
import { Button } from "../index";
import React from "react";

export const NotFound: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <img src={NotFoundImg} alt="Not Found" className="w-36" />
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="list-title-text text-2xl">There is no feedback yet.</h1>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-center list-p-text">
          Got a suggestion? Found a bug that needs to be squashed?
        </p>
      </div>
      <div className="justify-center flex list-p-text">
        <p>We love hearing about new ideas to improve our app.</p>
      </div>
      <div className="justify-center flex mt-8">
        <Link to={"/add-feedback"}>
          <Button className="px-5 py-3 text-white add-feedback rounded-xl">
            + Add Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
};
