import React, { useRef, useCallback, useState, useEffect } from "react";
import { useGetProductCategoriesQuery } from "../features/products/productService";
import { CategoryType } from "../features/products/product.types";
import { useNavigate } from "react-router-dom";
import {
  generateRandomNumbersArr,
  generateRandomNumber,
} from "../utils/helpers";
import { colors } from "../constants/index";

const Clp = () => {
  const {
    data: categoryList,
    error: listError,
    isLoading: listIsLoading,
  } = useGetProductCategoriesQuery();
  const navigate = useNavigate();

  if (listIsLoading) return <div>Loading...</div>;
  if (listError)
    return (
      <div>
        Error:
        {"message" in listError ? listError.message : "An error occurred"}
      </div>
    );

  return (
    <section className="justify-between items-center">
      <section className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-4xl text-teal-900 font-semibold">Category List</h2>
      </section>
      <div className="p-5 md:p-0 grid grid-cols-4 xs:grid-cols-1: gap-10 items-start ">
        {categoryList &&
          categoryList.length > 0 &&
          categoryList!.map((category: CategoryType, index: number) => {
            const randNum = generateRandomNumber(10, 99);
            const bgcolor = colors[index % colors.length];
            return (
              <div
                key={index}
                onClick={() => navigate(`/products/category/${category.slug}`)}
                className={`p-4 border hover:border-neutral-300 items-center transform duration-500 hover:-translate-y-5 cursor-pointer bg-opacity-5 hover:bg-opacity-20 bg-${bgcolor}-500 text-black hover:underline text-center pt-8`}
              >
                <figure className="w-full">
                  <img
                    src={`https://mdbcdn.b-cdn.net/img/new/standard/nature/0${randNum}.webp`}
                    alt={category.name}
                    className="object-cover w-full"
                  />
                </figure>

                <h5 className="mt-6 mb-3 font-medium tracking-wideer text-2xl ">
                  {category.name}
                </h5>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Clp;
