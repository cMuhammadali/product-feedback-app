import { PostService } from "../../services/PostService";
import ListUpIon from "../../images/ListUpIcon.png";
import CommentIcon from "../../images/Comment.png";
import { IPost } from "../../modules/IPost";
import { Link } from "react-router-dom";
import { NotFound } from "../index";
import React from "react";
import "./List.css";

type ListProps = {
  isLoading: boolean;
  filterResult: IPost[] | null | undefined;
};

export const List: React.FC<ListProps> = ({ isLoading, filterResult }) => {
  const [editFeedbackPost, {}] = PostService.useEditFeedbackPostMutation();

  if (isLoading)
    return (
      <h1 className="text-xl mt-8 list-title-text text-center">Loading...</h1>
    );

  const handleCount = async (value: string | number | undefined) => {
    if (value) {
      const feedbackItem = filterResult?.find((item) => item.id === value);
      if (feedbackItem) {
        const mappedData = {
          id: feedbackItem.id || 0,
          likes: (feedbackItem.likes || 0) + 1,
          isLiked: feedbackItem.isLiked || false,
          comments: feedbackItem.comments || [],
          title: feedbackItem.title || "",
          description: feedbackItem.description || "",
          type: feedbackItem.type || "",
          status: feedbackItem.status || "",
        };

        await editFeedbackPost({
          id: value,
          feedback: mappedData,
        });
      }
    }
  };
  return (
    <div className="list-box mt-4">
      {filterResult?.length ? (
        filterResult.map((item) => {
          return (
            <div className="mt-4 feedback-shadow" key={item?.id}>
              <div className="flex justify-between bg-white p-6 rounded-xl">
                <div className="w-4/5 flex justify-left items-center">
                  <div
                    className="rounded-xl list-up-button cursor-pointer px-3 py-2 items-center mr-6"
                    onClick={() => handleCount(item.id)}
                  >
                    <div className="flex justify-center">
                      <img
                        src={ListUpIon}
                        alt="UpIcon"
                        className="list-up-icon mb-1 items-center"
                      />
                    </div>
                    <div>
                      <span className="nt-2 list-span-text items-center">
                        {item?.likes}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/one-feedback/${item?.id}`}
                    key={item?.id}
                    className="cursor-pointer"
                  >
                    <div className="items-center ml-6">
                      <h1 className="list-title-text text-lg font-bold mb-1">
                        {item?.title}
                      </h1>
                      <p className="list-p-text mt-1 mb-4">
                        {item?.description}
                      </p>
                      <span className="list-span-text-last px-3 py-2 mt-4 rounded-xl">
                        {item?.type}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="flex justify-between items-center">
                  <img
                    src={CommentIcon}
                    alt="CommentIcon"
                    className="comment-icon mr-2"
                  />
                  <span className="text-lg ml-2 list-title-text">
                    {item?.commentsCount}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
};
