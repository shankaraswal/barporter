import React from "react";
import Card from "../components/common/Card";

function ItemList() {
  const generateRandomNumbers = (min: number, max: number, count: number) => {
    if (min > max)
      throw new Error("Min value should be less than or equal to max value.");
    if (count <= 0) throw new Error("Count should be a positive number.");

    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min)) + min
    );
  };

  const randomNumbers = generateRandomNumbers(100, 300, 50);
  console.log(randomNumbers);

  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {randomNumbers?.map((num, i) => (
          <Card imgnum={num} key={i} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
