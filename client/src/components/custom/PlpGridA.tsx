import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import {
  useGetProductListQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
} from "../../features/products/productService";
import { Pagination, CartIcon, Rating, AddToWishList } from "../../components";
import { ProductType } from "../../features/products/product.types";
import { colors } from "../../constants";

const PlpGridA = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 30;
  const skip = (currentPage - 1) * limit;
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const pathParts = pathname.split("/");
  const category = pathParts.includes("category")
    ? pathParts[pathParts.indexOf("category") + 1]
    : null;
  const searchQuery = new URLSearchParams(location.search).get("q");

  let productQueryResult;
  if (category) {
    productQueryResult = useGetProductByCategoryQuery({
      category,
      limit,
      skip,
    });
  } else if (searchQuery) {
    productQueryResult = useSearchProductsQuery({
      query: searchQuery,
      limit,
      skip,
    });
  } else {
    productQueryResult = useGetProductListQuery({ limit, skip });
  }

  const {
    data: productList,
    error: listError,
    isLoading: listIsLoading,
  } = productQueryResult;

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
                  key={product.id}
                  className={`p-4 border hover:border-neutral-300 items-center transform duration-500 hover:-translate-y-5 cursor-pointer  bg-opacity-5 hover:bg-opacity-10 bg-${bgcolor}-500`}
                >
                  <div className="flex flex-row gap-4 py-4">
                    <figure className="h-full w-[50%] ">
                      <img
                        className="object-fill"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </figure>
                    <div className=" justify-start leading-normal w-[50%]">
                      <h5 className="mb-2 text-xl font-semibold text-ellipsis line-clamp-1">
                        {product.title}
                      </h5>
                      <p
                        className="mb-4 text-md  tracking-wider text-red-600 hover:text-red-900 capitalize hover:underline"
                        onClick={() =>
                          navigate(`/products/category/${product.category}`)
                        }
                      >
                        {product.category}
                      </p>

                      <p className="mb-3 font-normal text-black text-ellipsis line-clamp-2 dark:text-neutral-400">
                        {product.description}
                      </p>
                      <p className="mt-10 text-md font-semibold text-neutral-400">
                        <span className="line-through">
                          £{(product.price + 20).toFixed(2)}
                        </span>
                      </p>
                      <h4 className="text-2xl mb-5 text-red-500 font-semibold">
                        £{product.price.toFixed(2)}
                      </h4>
                      <div className="flex flex-row justify-between items-center gap-2">
                        <Rating />
                        <span className="flex top-5 right-5 border bg-white w-10 h-10 p-1 text-center rounded-full justify-center items-center">
                          <AddToWishList bgcolor="gray" />
                        </span>
                      </div>
                      <div className="flex place-items-end justify-between gap-2 space-y-6 leading-relaxed relative ">
                        <button
                          className={`p-3 px-5 font-bold text-white rounded-[6px] bg-${bgcolor}-500 bg-opacity-70 hover:bg-opacity-100`}
                        >
                          Buy Now
                        </button>

                        <button
                          type="button"
                          className={`p-3 px-5 font-bold bg-${bgcolor}-500 rounded-[6px] text-neutral-600 hover:text-neutral-900 inline-flex border border-neutral-300 bg-opacity-10 hover:bg-opacity-20 `}
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
