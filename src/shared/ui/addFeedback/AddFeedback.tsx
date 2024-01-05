import { useNavigate } from "react-router-dom";
import { Button, Form, Label } from "../index";
import GoBack from "../../images/GoBack.png";
import { useForm } from "react-hook-form";
import "./AddFeedback.css";
import React from "react";

export const AddFeedback: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="items-center h-screen mt-4">
      <div className="flex justify-left items-center mx-96">
        <span
          className="cursor-pointer flex justify-between items-center"
          onClick={() => navigate(-1)}
        >
          <img src={GoBack} alt="Go Back" className="go-back-icon mr-2 ml-32" />{" "}
          <h3 className="go-back-text ml-2">Go Back</h3>
        </span>
      </div>
      <div className="flex justify-center mt-12">
        <div className="absolute top-14 rounded-full text-white pb-4 px-6 pt-3 circle-add-product">
          <span className="text-4xl">+</span>
        </div>
        <div className="w-4/12 bg-white add-feedback-card shadow-2xl rounded-xl px-6 py-4">
          <h1 className="text-titleColor text-2xl mt-8">Create New Feedback</h1>
          <form className="mt-6">
            <Form>
              <Label
                labelTitle="Feedback Title"
                labelP="Add a short, descriptive headline"
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <input className="input-add mt-3 w-full h-12 rounded-xl text-titleColor indent-1 mb-4" />
            </Form>
            <Form>
              <Label
                labelTitle="Category"
                labelP="Choose a category for your feedback"
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <select
                className="input-add mt-3 w-full h-12 rounded-xl text-titleColor indent-1 mb-4"
                defaultValue={"feature"}
              >
                <option value="feature">Feature</option>
                <option value="bug">Bug</option>
                <option value="enhancement">Enhancement</option>
                <option value="enhancement">UI</option>
                <option value="enhancement">UX</option>
              </select>
            </Form>
            <Form>
              <Label
                labelTitle="Feedback Detail"
                labelP="Include any specific comments on what should be improved, added, etc."
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <textarea className="input-add mt-3 w-full rounded-xl text-titleColor indent-1 mb-4 max-h-20 min-h-20" />
            </Form>
            <div className="flex justify-end mt-4">
              <Button
                className="py-3 px-5 mr-2 bg-cancel text-white rounded-xl"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button className="py-3 px-5 ml-2 bg-add text-white rounded-xl">
                Add Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
