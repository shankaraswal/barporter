import React from "react";
import { generateRandomNumber } from "../../utils/helpers";

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
      ></div>
    </>
  );
}
