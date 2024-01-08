import ListUpIconWhite from "../../images/ListUpIconWhite.png";
import ListUpIon from "../../images/ListUpIcon.png";
import CommentIcon from "../../images/Comment.png";
import { IPost } from "../../modules/IPost";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NotFound } from "../index";
import "./List.css";

type ListProps = {
  isLoading: boolean;
  filterResult: IPost[] | null | undefined;
};

export const List: React.FC<ListProps> = ({ isLoading, filterResult }) => {
  const [isHover, setIsHover] = useState(false);

  if (isLoading)
    return (
      <h1 className="text-xl mt-8 list-title-text text-center">Loading...</h1>
    );

  return (
    <div className="list-box mt-4">
      {filterResult?.length ? (
        filterResult.map((item) => {
          return (
            <div className="mt-4 feedback-shadow" key={item?.id}>
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
                      {item?.likes}
                    </span>
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

