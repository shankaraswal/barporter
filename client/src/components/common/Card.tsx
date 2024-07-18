import React from "react";
import { TERipple } from "tw-elements-react";

export default function CardWithImageExample({ imgnum }: { imgnum: any }) {
  console.log(imgnum);
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img
          className="rounded-t-lg"
          // src={`https://tecdn.b-cdn.net/img/new/standard/nature/${imgnum}.jpg`}
          src={`https://tecdn.b-cdn.net/img/new/slides/${imgnum}.jpg`}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {`Item ${imgnum} title`}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Detail
        </button>
      </div>
    </div>
  );
}
