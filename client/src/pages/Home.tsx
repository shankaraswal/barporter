import React from "react";
<<<<<<< Updated upstream
import HeroImg from "../assets/images/1.jpeg";
=======
import LogoImg from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { generateRandomNumber } from "../utils/helpers";
>>>>>>> Stashed changes

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <img src={HeroImg} alt="Barter and Porter" />
      </div>
      <div className="bg-blue-200 w-full rounded-lg text-center p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Barter and Porter
        </h1>
        <p className="text-xl w-full">
          Your one-stop shop for trading and porting services
        </p>
      </div>

      <div className="features mb-8">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Wide range of items to trade</li>
          <li className="mb-2">Reliable porting services</li>
          <li className="mb-2">User-friendly interface</li>
          <li className="mb-2">Secure transactions</li>
        </ul>
      </div>

      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="gallery-item bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Item 1"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold">Item 1</h3>
          <p className="text-gray-600">Description for item 1</p>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Item 2"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold">Item 2</h3>
          <p className="text-gray-600">Description for item 2</p>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Item 3"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold">Item 3</h3>
          <p className="text-gray-600">Description for item 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
