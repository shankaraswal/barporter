import React from "react";
import { generateRandomNumber } from "../../utils";

export default function Hero() {
  const randomNumber = generateRandomNumber(10, 99);

  return (
    <>
      <div
        className="card w-full bg-image border-b-2 border-slate-100"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/0${randomNumber}.webp')`,
          height: "800px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
              <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
