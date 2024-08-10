import React from "react";
import { ProductType } from "../../features/products/product.types";
import { useNavigate } from "react-router-dom";

const Card = React.forwardRef<HTMLDivElement, { product: ProductType }>(
  ({ product }, ref) => {
    return (
      <div
        ref={ref}
        className="block rounded-lg bg-white shadow-[0_5px_15px_-5px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
          <img className="w-full" src={product.thumbnail} alt={product.title} />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{product.title}</h2>
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-gray-800">
                ${product.price.toFixed(2)}
              </span>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                {product.rating} ⭐
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Stock:</strong> {product.availabilityStatus}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default Card;
