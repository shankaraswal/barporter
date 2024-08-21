import React from "react";

function AddToWishList({ bgcolor }: { bgcolor: string }) {
  return (
    <>
      <button
        type="button"
        className="bg-opacity-100 bg-white rounded-[8px] w-10 h-10 text-center items-center justify-center flex border border-gray-300 pt-1"
      >
        <svg
          className={`h-8 w-8`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={bgcolor}
        >
          <path
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default AddToWishList;
