import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryType, ProductListType, ProductType } from "./product.types";

export const productService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<
      ProductListType,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
    }),
    getProduct: builder.query<ProductType, string>({
      query: (pid: string) => `products/${pid}`,
    }),
    getProductCategories: builder.query<CategoryType[], void>({
      query: () => `products/categories`,
    }),
    getProductByCategory: builder.query<ProductType[], string>({
      query: (cat: string) => `products/category/${cat}`,
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} = productService;
