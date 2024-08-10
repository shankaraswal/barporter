import { ProductType } from "@/src/features/products/product.types";
import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ product }: { product: ProductType }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <figure className="p-4 w-full rounded-t-lg h-full">
          <img
            className="object-cover h-full"
            src={product.thumbnail}
            alt={product.title}
          />
        </figure>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="group flex flex-row items-center justify-end gap-4 leading-normal">
            <button
              type="button"
              onClick={() => navigate("/detail")}
              className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Detail
            </button>
            <button
              type="button"
              onClick={() => navigate("/detail")}
              className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageCard;
