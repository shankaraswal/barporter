import React from "react";
import Card from "../components/common/Card";
import { generateRandomNumbersArr } from "../utils/helpers";

const ItemList = () => {
  const randomNumbers = generateRandomNumbersArr(10, 120, 100);
  return (
    <>
      <h2 className="text-6xl text-teal-900 mb-6 font-semibold">Item List</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1: gap-10">
        {randomNumbers.sort()?.map((num, i) => (
          <Card imgnum={num} key={i} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
