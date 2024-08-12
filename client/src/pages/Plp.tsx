import React, { useState } from "react";
import PlpGridA from "../components/custom/PlpGridA";
import PlpGridB from "../components/custom/PlpGridB";

const Plp = () => {
  const [activeView, setActiveView] = useState("grid_a");
  const colors = [
    "red",
    "orange",
    // "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    // "violet",
    "purple",
    // "fuchsia",
    "pink",
    // "rose",
    "stone",
    "neutral",
    // "zinc",
    "gray",
    "slate",
  ];
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-6xl text-teal-900 mb-6 font-semibold">Item List</h2>
        <div className="gap-2 flex">
          <button
            onClick={() => setActiveView("grid_a")}
            className={`px-3 bg-red-400 rounded-md flex flex-shrink text-center justify-center align-middle items-center gap-2 hover:bg-red-600 text-white`}
          >
            View A
          </button>
          <button
            onClick={() => setActiveView("grid_b")}
            className={`p-3 bg-red-400  rounded-md flex flex-shrink text-center justify-center align-middle items-center gap-2 hover:bg-red-600 text-white`}
          >
            View B
          </button>
        </div>
      </div>
      {activeView === "grid_a" ? (
        <PlpGridA colors={colors} />
      ) : (
        <PlpGridB colors={colors} />
      )}
    </>
  );
};

export default Plp;
