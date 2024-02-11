import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostListType, PostType } from './server-types';
import { API_BASE_URL } from './base-url';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: (builder) => ({
    fetchPostList: builder.query<PostListType, {limit: number, start: number}> ({
      query: ({limit = 8, start=0}) => ({
        url: '/posts',
        params: {
          _limit:limit,
          _start: start,
        }
      })
    }),
    fetchPostById: builder.query<PostType, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      })
    })
  })
});

export const { useFetchPostListQuery} = postApi;


