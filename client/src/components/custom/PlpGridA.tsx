import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductListQuery } from "../../features/products/productService";
import {
  Pagination,
  CartIcon,
  Rating,
  AddToWishList,
} from "../../components/index";
import { ProductType } from "../../features/products/product.types";

const PlpGridA = ({ colors }: { colors: any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 24;
  const skip = (currentPage - 1) * limit;
  const navigate = useNavigate();

  const {
    data: productList,
    error: listError,
    isLoading: listIsLoading,
  } = useGetProductListQuery({ limit, skip });

  if (listIsLoading) return <div>Loading...</div>;
  if (listError)
    return (
      <div>
        Error:
        {"message" in listError ? listError.message : "An error occurred"}
      </div>
    );

  const totalPages = Math.ceil(productList!.total / limit);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <section className="container mx-auto py-10 md:py-8 px-0 md:px-0">
        <div className="p-5 md:p-0 grid grid-cols-2 xs:grid-cols-1: gap-10 items-start ">
          {productList &&
            productList.products?.map((product: ProductType, index: any) => {
              const bgcolor = colors[index % colors.length];
              return (
                <div
                  className={`p-4 items-center shadow-lg transform duration-500 hover:-translate-y-2 cursor-pointer bg-${bgcolor}-500 bg-opacity-10 hover:bg-opacity-20`}
                >
                  <div className="flex flex-row gap-4 py-4">
                    <figure className="h-full w-[48%]">
                      <img
                        className="object-cover h-full"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </figure>
                    <div className=" justify-start leading-normal w-[55%]">
                      <h5 className="mb-2 text-xl font-semibold text-ellipsis line-clamp-2">
                        {product.title}
                      </h5>
                      <p className="mb-3 font-normal text-neutral-700 text-ellipsis line-clamp-3 dark:text-neutral-400">
                        {product.description}
                      </p>
                      <p className="mt-10 text-lg font-bold text-gray-500">
                        <span className="line-through">
                          £{(product.price + 20).toFixed(2)}
                        </span>
                      </p>
                      <h4 className="text-3xl mb-5 text-red-800 font-semibold">
                        £{product.price}
                      </h4>
                      <div className="flex flex-row justify-between items-center gap-2">
                        <Rating />
                        <span className="flex top-5 right-5 border bg-white w-10 h-10 p-1 text-center rounded-full justify-center items-center">
                          <AddToWishList bgcolor="gray" />
                        </span>
                      </div>
                      <div className="flex place-items-end justify-end gap-6 space-y-6 leading-relaxed relative">
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
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PlpGridA;
