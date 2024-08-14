import React, { useState } from "react";
import { useGetProductCategoryListQuery } from "../../features/products/productService";
import { NavLink, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    data: categoryListName,
    error: categoryError,
    isLoading: categoryLoading,
  } = useGetProductCategoryListQuery();

  if (categoryLoading) return <div>Loading...</div>;
  if (categoryError)
    return (
      <div>
        Error:
        {"message" in categoryError
          ? categoryError.message
          : "An error occurred"}
      </div>
    );

  return (
    <div className="flex flex-grow mx-12 relative">
      <button
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-lg font-medium text-center text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-s-lg "
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        All categories
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`absolute  bg-white rounded-lg w-60 border border-neutral-300 z-30 top-[58px] ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className=" text-lg text-neutral-700">
          {categoryListName &&
            categoryListName.length > 0 &&
            categoryListName?.map((cat) => (
              <NavLink
                key={cat}
                className="py-2 px-6 bg-neutral-100 border border-b-neutral-300 flex flex-col capitalize cursor-pointer hover:bg-red-100"
                to={`/products/category/${cat}`}
                onClick={() => setIsOpen(false)}
              >
                {cat}
              </NavLink>
            ))}
        </ul>
      </div>
      <div className="relative w-full flex">
        <input
          type="search"
          id="search-dropdown"
          className="p-4 w-full z-20 text-lg text-blace border border-neutral-400 border-r-0 focus:border-neutral-300 focus:outline-none "
          placeholder="Search Mockups, Logos, Design Templates... "
          required
        />
        <button
          type="submit"
          className="top-0 end-0 -ml-2 z-40 px-6 font-medium h-full text-white bg-red-700 hover:bg-red-800 rounded-e-[10px]"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
