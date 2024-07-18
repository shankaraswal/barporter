import React from "react";

export default function Hero() {
  const pickRandomNumber = (min: number, max: number): number => {
    if (min > max)
      throw new Error("Min value should be less than or equal to max value.");

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = pickRandomNumber(10, 99);

  return (
    <div
      className="card w-full bg-image border-b-2 border-slate-100"
      style={{
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/0${randomNumber}.webp')`,
        height: "800px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></div>
  );
}
