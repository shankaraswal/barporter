import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center space-y-8">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-700 dark:text-red-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-neutral-600 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-xl font-light dark:text-red-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <button
              onClick={() => navigate("/")}
              className="flex m-auto items-center gap-2 text-neutral-500 text-md  hover:bg-red-200  rounded-full px-16 py-4 hover:text-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to Homepage
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
