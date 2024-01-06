import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../modules/IPost";

export const PostService = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 100) => ({
        url: "/feedbacks",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Post"],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/feedbacks",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    oneFeedback: build.query<IPost, number>({
      query: (id: number) => ({
        url: `/feedbacks/${id}`,
      }),
    }),
  }),
});
