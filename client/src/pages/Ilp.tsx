import React, { useRef, useCallback, useState, useEffect } from "react";
import { useGetItemListQuery } from "../features/items/itemService";
import { ItemListResponse, ItemType } from "../features/items/item.types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  generateRandomNumbersArr,
  generateRandomNumber,
} from "../utils/helpers";
import { colors } from "../constants/index";

const Ilp = () => {
  const {
    data,
    error: itemError,
    isLoading: itemIsLoading,
  } = useGetItemListQuery();
  const navigate = useNavigate();

  if (itemIsLoading) return <div>Loading...</div>;
  if (itemError)
    return (
      <div>
        Error:
        {"message" in itemError
          ? itemError.message
          : "An error occurred in the API"}
      </div>
    );

  console.log(data?.data.itemList);
  return (
    <section className="justify-between items-center">
      <section className="flex flex-col mb-6 justify-start gap-6">
        <h2 className="text-4xl text-teal-900 font-semibold">Item List</h2>
        <div className="grid grid-cols-1 gap-6">
          {data?.data?.itemList.map((item) => (
            <ul
              key={item._id}
              className="border-2 flex flex-row border-stone-200 rounded-xl shadow-stone-500 shadow-lg bg-stone-100 justify-between items-center overflow-hidden"
            >
              <li
                className="w-1/3 h-full"
                style={{
                  background: `url(${item.prodImages[0]})`,
                  backgroundSize: "100% 100%",
                }}
              >
                {/* <img
                  className="rounded-t-lg h-full bg-cover"
                  src={item.prodImages[0]}
                  alt=""
                /> */}
              </li>

              <li className="bg-red-200 p-4 w-1/3 flex flex-col h-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-900 ">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item.description}
                </p>
                <NavLink
                  className="mb-3 font-normal text-stone-700 dark:text-stone-400"
                  to={`/products/category:${item.category}`}
                >
                  {item.category}
                </NavLink>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item.isAvailable ? "Available" : "Not Available"}
                </p>

                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  was £{item.price.toFixed(2)}
                </p>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item.discount}%
                </p>
                <p className="mb-3 text-red-700 dark:text-stone-400 text-lg font-bold ">
                  £{item.discountedPrice.toFixed(2)}
                </p>
              </li>
              <li className="bg-green-100 p-4 w-1/6 flex flex-col h-full">
                <h4>Trader Info</h4>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item?.trader[0]?.username!}
                </p>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item?.trader[0]?.username!}
                </p>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item?.trader[0]?.location!}
                </p>
              </li>
              <li className="bg-red-100 p-4  w-1/6 flex flex-col h-full">
                <h4>Trade With</h4>
                <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
                  {item?.trader[0]?.username!}
                </p>
                <p className="mb-3 font-normal text-stone-700 dark:text-gray-400">
                  {item?.trader[0]?.username!}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item?.trader[0]?.location!}
                </p>
              </li>
              <li className="bg-orange-100 w-1/6 flex flex-col h-full p-4 justify-center">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 ">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Ilp;
