import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-white">
      <div className=" w-screen block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
