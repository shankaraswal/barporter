import React, { useState } from "react";
import PlpGrid from "../components/custom/PlpGrid";
import { SearchBar } from "../components";

const Plp = () => {
  const [activeView, setActiveView] = useState("grid_a");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchQuery(query);
    } else {
      setSearchQuery(query);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-6 w-full">
        <h2 className="text-4xl text-teal-900 font-semibold w-2/10">
          Product List
        </h2>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-row w-2/10 gap-2">
          <button
            onClick={() => setActiveView("grid_a")}
            className="border border-neutral-500  "
          >
            <svg
              className="text-gray-800 dark:text-white bg-neutral-200 w-12 h-12 p-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
              />
            </svg>
          </button>
          <button
            onClick={() => setActiveView("grid_b")}
            className="border border-neutral-500"
          >
            <svg
              className="text-neutral-500 dark:text-white bg-neutral-200 w-12 h-12 p-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <PlpGrid viewType={activeView} searchQuery={searchQuery} />
    </>
  );
};

export default Plp;
