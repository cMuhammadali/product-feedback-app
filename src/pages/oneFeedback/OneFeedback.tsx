import ListUpIconWhite from "../../images/ListUpIconWhite.png";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostService } from "@services/PostService";
import ListUpIon from "@images/ListUpIcon.png";
import CommentIcon from "@images/Comment.png";
import { useForm } from "react-hook-form";
import { Form } from '@components/index';
import GoBack from "@images/GoBack.png";
import React, { useState } from "react";
import { Button } from "@ui/index";
import "./OneFeedback.css";
import {
  editFeedbackCommentForm,
  editFeedbackCommentSchema,
} from "@schema/Schema";

interface Comment {
  id: number;
  title: string;
}

export const OneFeedback: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);

  const [editFeedbackPost, {}] = PostService.useEditFeedbackPostMutation();
  const {
    data: feedback,
    error,
    isLoading,
  } = PostService.useOneFeedbackQuery(Number(id));
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<editFeedbackCommentForm>({
    defaultValues: {},
    resolver: zodResolver(editFeedbackCommentSchema),
  });

  const handleAddComment = async (newComment: editFeedbackCommentForm) => {
    const mappedData = {
      id: feedback?.id || 0,
      likes: feedback?.likes || 0,
      isLiked: feedback?.isLiked || false,
      comments: [
        ...(feedback?.comments || []),
        { id: Number(id), title: newComment.comment },
      ],
      title: feedback?.title || "",
      description: feedback?.description || "",
      type: feedback?.type || "",
      status: feedback?.status || "",
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await editFeedbackPost({
      id: id,
      feedback: mappedData,
    });
    reset();
  };

  if (isLoading)
    return (
      <h1 className="text-xl mt-8 list-title-text text-center">Loading...</h1>
    );

  return (
    <div className="flex justify-center">
      <div className="one-feedback-main h-screen py-4">
        <div className="flex justify-between">
          <div
            className="flex justify-between w-24 items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={GoBack} alt="Go back" className="go-back-icon" />
            <p className="go-back-text ml-2">Go Back</p>
          </div>

          <Button
            className="px-5 py-3 one-feedback-edit-button text-white rounded-xl"
            onClick={() => navigate(`/edit-feedback/${id}`)}
          >
            Edit Feedback
          </Button>
        </div>

        <div className="mt-4" key={feedback?.id}>
          <div className="flex justify-between bg-white p-6 rounded-xl">
            <div className="w-4/5 flex justify-left items-center">
              <div
                className="text-center rounded-xl list-up-button cursor-pointer px-3 py-2 items-center mr-6"
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
              >
                {isHover ? (
                  <img
                    src={ListUpIconWhite}
                    alt="UpIcon"
                    className="list-up-icon text-center mb-1 ml-1 items-center"
                  />
                ) : (
                  <img
                    src={ListUpIon}
                    alt="UpIcon"
                    className="list-up-icon text-center mb-1 ml-1 items-center"
                  />
                )}
                <span className="text-center nt-2 list-span-text items-center">
                  {feedback?.likes}
                </span>
              </div>
              <div className="items-center ml-6">
                <h1 className="list-title-text text-lg font-bold mb-1">
                  {feedback?.title}
                </h1>
                <p className="list-p-text mt-1 mb-4">{feedback?.description}</p>
                <span className="list-span-text-last px-3 py-2 mt-4 rounded-xl">
                  {feedback?.type}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <img
                src={CommentIcon}
                alt="CommentIcon"
                className="comment-icon mr-2"
              />
              <span className="text-lg ml-2 list-title-text">
                {feedback?.commentsCount}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white p-6 rounded-xl">
          <div>
            <h1 className="text-xl list-title-text font-bold mb-4">
              {feedback?.comments?.length === 0 ||
              feedback?.comments?.length === 1
                ? feedback?.comments?.length + " Comment"
                : feedback?.comments?.length + " Comments"}
            </h1>
          </div>

          <div className="mt-4">
            {feedback?.comments?.map((item: Comment) => {
              return (
                <div key={item.id}>
                  <h1>{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 bg-white p-6 rounded-xl">
          <div className="mb-2">
            <h1 className="text-xl list-title-text font-bold mb-4">
              Add Comment
            </h1>
          </div>

          <div className="mt-2 mb-2">
            <form onSubmit={handleSubmit(handleAddComment)}>
              <Form>
                <textarea
                  className={
                    errors.comment?.message?.length
                      ? "input-add-error mt-3 w-full rounded-xl text-titleColor indent-1 max-h-20 min-h-20 py-4 px-4"
                      : "input-add mt-3 w-full rounded-xl text-titleColor indent-1 max-h-20 min-h-20 py-4 px-4"
                  }
                  placeholder="Type your comment here"
                  {...register("comment")}
                />
                <h3 className="mb-4 text-red-600">{errors.comment?.message || null}</h3>
              </Form>
            </form>
          </div>

          <div className="mt-2 flex justify-between items-center">
            <h3 className="text-bottom text-sm">250 Characters left</h3>
            <Button
              className="one-feedback-post-comment text-white rounded-xl px-5 py-3"
              onClick={handleSubmit(handleAddComment)}
            >
              {isSubmitting ? "Loading..." : "Post Comment"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
