import React, { forwardRef } from "react";
import { ProductType } from "../../features/products/product.types";
import { useNavigate } from "react-router-dom";
import { AddToWishList, CartIcon, Rating } from "../";

const PlpCardB = forwardRef(
  ({ product, bgcolor }: { product: ProductType; bgcolor: string }, ref) => {
    const navigate = useNavigate();
    return (
      <section
        onClick={() => navigate(`/product/${product.id}`)}
        className={`p-5 pb-10 border hover:border-neutral-300 text-center transform duration-500 hover:-translate-y-5 cursor-pointer bg-opacity-5 hover:bg-opacity-10 bg-${bgcolor}-500`}
      >
        <span className="absolute flex top-5 right-5 border-2 border-gray-300 bg-white w-10 h-10 p-1 text-center rounded-full justify-center items-center">
          <AddToWishList bgcolor="red" />
        </span>
        <figure className="h-full w-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="space-x-1 flex justify-center my-5">
          <Rating />
        </div>
        <h5 className="mb-2 text-xl font-semibold text-ellipsis line-clamp-2">
          {product.title}
        </h5>
        <p className="mb-5 text-ellipsis text-lg line-clamp-2">
          {product.description}
        </p>
        <p className="mt-10 text-md font-semibold text-gray-400">
          <span className="line-through">
            £{(product.price + 20).toFixed(2)}
          </span>
        </p>
        <h4 className="text-2xl mb-5 text-red-500 font-semibold">
          £{product.price}
        </h4>
        <div className="flex gap-5 flex-row justify-center">
          <button
            className={`p-3 px-5 font-bold text-white rounded-[6px] bg-${bgcolor}-500 bg-opacity-70 hover:bg-opacity-100`}
          >
            Buy Now
          </button>
          <button
            type="button"
            className={`p-3 px-5 font-bold bg-${bgcolor}-500 rounded-[6px] text-neutral-600 hover:text-neutral-900 inline-flex border border-neutral-300 bg-opacity-10 hover:bg-opacity-20`}
          >
            <CartIcon color="black" />
            Add to cart
          </button>
        </div>
      </section>
    );
  }
);
export default PlpCardB;
