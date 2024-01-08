import { PostService } from "../../services/PostService";
import { Leftbar, List, Navbar } from "../index";
import { IPost } from "../../modules/IPost";
import React, { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = PostService.useFetchAllPostsQuery(100);
  const [filterResult, setFilterResult] = useState<IPost[] | null | undefined>(
    []
  );
  const [filterNavbar, setFilterNavbar] = useState<string>("Most Upvotes");

  useEffect(() => {
    setFilterResult(posts);
  }, [posts]);

  const handleFilter = (type: string) => {
    if (type === "All") {
      setFilterResult(posts);
    } else {
      const result = posts?.filter((feedback) => feedback.type === type);
      setFilterResult(result || null);
    }
  };

  const handleFilterNavbar = (value: string) => {
    setFilterNavbar(value);

    if (value === "Most Upvotes") {
      setFilterResult(posts);
    }
    if (value === "Least Upvotes") {
      if (posts) {
        const sortedPosts = [...posts].sort(
          (a, b) => (a?.likes || 0) - (b?.likes || 0)
        );
        setFilterResult(sortedPosts);
      }
    }
    if (value === "Most Comments") {
      if (posts) {
        const sortedPosts = [...posts].sort(
          (a, b) => (b?.commentsCount || 0) - (a?.commentsCount || 0)
        );
        setFilterResult(sortedPosts);
      }
    }
    if (value === "Least Comments") {
      if (posts) {
        const sortedPosts = [...posts].sort(
          (a, b) => (a?.commentsCount || 0) - (b?.commentsCount || 0)
        );
        setFilterResult(sortedPosts);
      }
    }
  };

  console.log("filterResult", filterResult);

  return (
    <div className="flex justify-between h-screen w-full">
      <div className="leftbar w-1/5">
        <Leftbar handleFilter={handleFilter} />
      </div>

      <div className="w-4/5 pt-2 px-8">
        <Navbar
          filterResult={filterResult}
          handleFilterNavbar={handleFilterNavbar}
          filterNavbar={filterNavbar}
        />

        <List isLoading={isLoading} filterResult={filterResult} />
      </div>
    </div>
  );
};
