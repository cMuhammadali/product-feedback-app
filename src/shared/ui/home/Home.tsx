import { PostService } from "../../services/PostService";
import { Leftbar, List, Navbar } from "../index";
import { IPost } from "../../modules/IPost";
import React, { useState } from "react";

export const Home: React.FC = () => {
  const [filterResult, setFilterResult] = useState<IPost[] | null | undefined>(
    []
  );
  const {
    data: posts,
    error,
    isLoading,
  } = PostService.useFetchAllPostsQuery(100);

  const handleFilter = (type: string) => {
    if (type === "All") {
      setFilterResult(posts);
    } else {
      const result = posts?.filter((feedback) => feedback.type === type);
      setFilterResult(result || null);
    }
  };

  return (
    <div className="flex justify-between h-screen w-full">
      <div className="leftbar w-1/5">
        <Leftbar handleFilter={handleFilter} />
      </div>

      <div className="w-4/5 pt-2 px-8">
        <Navbar />

        <List isLoading={isLoading} posts={posts} filterResult={filterResult} />
      </div>
    </div>
  );
};
