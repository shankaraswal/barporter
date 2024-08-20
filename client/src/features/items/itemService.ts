import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemListResponse, ItemType, TraderType } from "./item.types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("access_token");

    if (token) {
      // If there's a token, add it to the headers
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const itemService = createApi({
  reducerPath: "itemService",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getItemList: builder.query<ItemListResponse, void>({
      query: () => "items/list",
    }),
  }),
});

export const { useGetItemListQuery } = itemService;
