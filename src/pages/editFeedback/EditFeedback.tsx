import { editFeedbackForm, editFeedbackSchema } from "@schema/Schema";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostService } from "@services/PostService";
import CircleAdd from "@images/CircleAdd.png";
import EditPen from "@images/editPen.png";
import { Button, Label } from "@ui/index";
import { useForm } from "react-hook-form";
import { Form } from '@components/index';
import GoBack from "@images/GoBack.png";
import "./EditFeedback.css";
import React from "react";

export const EditFeedback: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editFeedbackPost, {}] = PostService.useEditFeedbackPostMutation();
  const [deleteFeedback] = PostService.useDeleteFeedbackMutation();
  const {
    data: feedback,
    error,
    isLoading,
  } = PostService.useOneFeedbackQuery(Number(id));
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<editFeedbackForm>({
    defaultValues: {},
    resolver: zodResolver(editFeedbackSchema),
  });

  const onSubmit = async (formData: editFeedbackForm) => {
    try {
      const mappedData = {
        id: feedback?.id || 0,
        commentsCount: feedback?.commentsCount || 0,
        likes: feedback?.likes || 0,
        isLiked: feedback?.isLiked || false,
        comments: feedback?.comments || [],
        ...formData,
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await editFeedbackPost({
        id: id,
        feedback: mappedData,
      });

      navigate(`/one-feedback/${id}`);
    } catch (error) {
      console.error("Error editing feedback:", error);
    }
  };

  const handleDelete = async () => {
    if (feedback) {
      await deleteFeedback(feedback);
      navigate("/");
    }
  };

  if (isLoading)
    return (
      <h1 className="text-xl mt-8 list-title-text text-center">Loading...</h1>
    );

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
        <div className="absolute top-14 rounded-full pb-4 px-6 pt-3"></div>
        <div className="absolute top-14 rounded-full w-1/4">
          <img
            src={CircleAdd}
            alt="Circle"
            className="circle-add-feedback absolute"
          />
          <img
            src={EditPen}
            alt="Edit Pen"
            className="add-plus-add-feedback absolute top-5 left-5"
          />
        </div>
        <div className="w-4/12 bg-white add-feedback-card rounded-xl px-6 py-4 h-screen">
          <h1 className="text-titleColor text-2xl mt-8">
            Editing "{feedback?.title}"
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <Form>
              <Label
                labelTitle="Feedback Title"
                labelP="Add a short, descriptive headline"
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <input
                className={
                  errors.title?.message?.length
                    ? "input-add-error mt-3 w-full h-12 rounded-xl text-titleColor indent-1"
                    : "input-add mt-3 w-full h-12 rounded-xl text-titleColor indent-1"
                }
                {...register("title")}
                defaultValue={feedback?.title}
              />
              <h3 className="mb-4 text-red-600 mt-1">{errors.title?.message || null}</h3>
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
                {...register("type")}
                defaultValue={feedback?.type}
              >
                <option value="Feature">Feature</option>
                <option value="Bug">Bug</option>
                <option value="Enhancement">Enhancement</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
              </select>
            </Form>
            <Form>
              <Label
                labelTitle="Update Status"
                labelP="Change feedback state"
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <select
                className="input-add mt-3 w-full h-12 rounded-xl text-titleColor indent-1 mb-4"
                {...register("status")}
                defaultValue={feedback?.status}
              >
                <option value="planned">Planned</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Live">Live</option>
              </select>
            </Form>
            <Form>
              <Label
                labelTitle="Feedback Detail"
                labelP="Include any specific comments on what should be improved, added, etc."
                labelClassName="text-titleColor text-lg"
                labelClassNameP="text-p-color-add text-sm"
              />
              <textarea
                className={
                  errors.description?.message?.length
                    ? "input-add-error mt-3 w-full rounded-xl text-titleColor indent-1 max-h-20 min-h-20"
                    : "input-add mt-3 w-full rounded-xl text-titleColor indent-1 max-h-20 min-h-20"
                }
                {...register("description")}
                defaultValue={feedback?.description}
              />
              <h3 className="mb-4 text-red-600">{errors.description?.message || null}</h3>
            </Form>
            <div className="flex justify-between mt-4 pb-6">
              <div>
                <Button
                  className="py-3 px-5 mr-2 bg-delete text-white rounded-xl"
                  onClick={handleDelete}
                >
                  {isLoading ? "Loading..." : "Delete"}
                </Button>
              </div>
              <div>
                <Button
                  className="py-3 px-5 mr-2 bg-cancel text-white rounded-xl"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button
                  className="py-3 px-5 ml-2 bg-add text-white rounded-xl"
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isSubmitting ? "Loading..." : "Edit Feedback"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
