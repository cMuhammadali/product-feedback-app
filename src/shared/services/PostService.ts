import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../modules/IPost";

export const PostService = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002",
  }),
  tagTypes: ["feedbacks"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 100) => ({
        url: "/feedbacks",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["feedbacks"],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/feedbacks",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["feedbacks"],
    }),
    oneFeedback: build.query<IPost, number>({
      query: (id: number) => ({
        url: `/feedbacks/${id}`,
      }),
    }),
    editFeedbackPost: build.mutation<IPost,{ id?: number | string; feedback: IPost }>({
      query: ({ id, feedback }) => ({
        url: `/feedbacks/${id}`,
        method: "PATCH",
        body: feedback,
      }),
      invalidatesTags: ["feedbacks"],
    }),
    deleteFeedback: build.mutation<IPost, IPost>({
      query: (feedback) => ({
        url: `/feedbacks/${feedback.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["feedbacks"],
    }),
  }),
});