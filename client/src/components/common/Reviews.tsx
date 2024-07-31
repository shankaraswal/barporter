import React from "react";
import { TERipple } from "tw-elements-react";

const Reviews = () => {
  return (
    <>
      <ul className="border-l-2 border-info-400  text-xl mx-8">
        <li>
          <div className="flex-start flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-40 w-40"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 ml-6 block w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  New Web Design
                </span>
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  04 / 02 / 2022
                </span>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>

              <button
                type="button"
                className="bg-teal-800 py-2 px-6 rounded-lg text-white hover:bg-teal-700"
              >
                Reply
              </button>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 ml-6 block w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  21 000 Job Seekers
                </span>
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  12 / 01 / 2022
                </span>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>

              <button
                type="button"
                className="bg-teal-800 py-2 px-6 rounded-lg text-white hover:bg-teal-700"
              >
                Reply
              </button>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 ml-6 block w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  Awesome Employers
                </span>
                <span className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                  21 / 12 / 2021
                </span>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>

              <button
                type="button"
                className="bg-teal-800 py-2 px-6 rounded-lg text-white hover:bg-teal-700"
              >
                Reply
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Reviews;
