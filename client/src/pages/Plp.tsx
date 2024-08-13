import React, { useState } from "react";
import PlpGridA from "../components/custom/PlpGridA";
import PlpGridB from "../components/custom/PlpGridB";

const Plp = () => {
  const [activeView, setActiveView] = useState("grid_a");

  return (
    <>
      <section className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-4xl text-teal-900 font-semibold">Product List</h2>
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
      </section>
      {activeView === "grid_a" ? <PlpGridB /> : <PlpGridA />}
    </>
  );
};

export default Plp;
