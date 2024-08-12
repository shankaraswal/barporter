import React from "react";

function AddToWishList({ bgcolor }: { bgcolor: string }) {
  return (
    <>
      <button type="button" className={`bg-transparent`}>
        <svg
          className={`h-8 w-8`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={bgcolor}
        >
          <path
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default AddToWishList;
