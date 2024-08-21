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
    getProductCategoryList: builder.query<string[], void>({
      query: () => `products/category-list`,
    }),

    getProductByCategory: builder.query<
      ProductListType,
      { category: string; limit: number; skip: number }
    >({
      query: ({ category, limit, skip }) =>
        `products/category/${category}?limit=${limit}&skip=${skip}`,
    }),
    searchProducts: builder.query<
      ProductListType,
      { query: string; limit: number; skip: number }
    >({
      query: ({ query, limit, skip }) =>
        `products/search?q=${query}&limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
  useGetProductCategoryListQuery,
} = productService;
