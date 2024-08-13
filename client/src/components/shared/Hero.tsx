import React from "react";
import { generateRandomNumber } from "../../utils/helpers";

export default function Hero() {
  const randomNumber = generateRandomNumber(10, 99);
  const backgroundImageUrl = `url('https://mdbcdn.b-cdn.net/img/new/slides/0${randomNumber}.webp')`;

  return (
    <>
      <div
        className="card w-full bg-image border-b-2 border-slate-100 h-[600px] bg-cover bg-no-repeat bg-center-center"
        style={{ backgroundImage: backgroundImageUrl }}
      />
    </>
  );
}
