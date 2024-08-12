import React from "react";
import { ProductType } from "../../features/products/product.types";
import { useNavigate } from "react-router-dom";
import { AddToWishList, CartIcon, Rating } from "..";

const PlpCardB = React.forwardRef<
  HTMLDivElement,
  {
    product: ProductType;
    bgcolor: string;
  }
>(({ product, bgcolor }) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        onClick={() => navigate(`/product/${product.id}`)}
        className={`p-5 py-10 text-center border shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer bg-${bgcolor}-500 bg-opacity-10 hover:bg-opacity-20`}
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
        <p className="mb-5 text-ellipsis line-clamp-2">{product.description}</p>
        <h4 className="text-3xl my-10 text-red-800 font-semibold">
          £{product.price}
        </h4>
        <div className="flex gap-5 flex-row justify-center">
          <button
            className={`p-3 px-6 font-bold text-white rounded-xl bg-${bgcolor}-500 bg-opacity-80 hover:bg-opacity-100 shadow-sm shadow-gray-300`}
          >
            Buy Now
          </button>
          <button
            type="button"
            className={`p-3 px-6 font-bold text-black rounded-xl bg-${bgcolor}-300 inline-flex border border-gray-400 bg-opacity-30 hover:bg-opacity-60 shadow-sm shadow-gray-300`}
          >
            <CartIcon color="black" />
            Add to cart
          </button>
        </div>
      </section>
    </>
  );
});
export default PlpCardB;
