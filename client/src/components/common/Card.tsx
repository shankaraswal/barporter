import React from "react";
import { useNavigate } from "react-router-dom";

// src={`https://tecdn.b-cdn.net/img/new/standard/nature/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/slides/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/standard/city/${imgnum}.webp`}

const ImageCard = ({ imgnum }: { imgnum: any }) => {
  const navigate = useNavigate();
  if (imgnum > 0 && imgnum < 100) {
    imgnum = "0" + imgnum;
  }
  return (
    <div className="block rounded-lg bg-white shadow-[0_5px_15px_-5px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <figure className="w-full border-b-2 border-white">
        <img
          src={`https://tecdn.b-cdn.net/img/new/standard/city/${imgnum}.webp`}
          className="align-middle rounded-t-lg "
          alt="..."
        />
      </figure>
      <div className="p-6 border-t-4 border-red-800">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {`Item new/standard/city/${imgnum}.webp title`}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          onClick={() => navigate("/detail")}
          className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Detail
        </button>
      </div>
    </div>
  );
};
export default ImageCard;
