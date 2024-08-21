import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  useGetProductListQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
} from "../../features/products/productService";
import { Pagination, CartIcon, Rating, AddToWishList } from "../../components";
import { ProductType } from "../../features/products/product.types";
import { colors } from "../../constants";

const PlpGrid = ({
  viewType = "grid_a",
  searchQuery,
}: {
  viewType: string;
  searchQuery: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

  const limit = 24;
  const skip = (currentPage - 1) * limit;

  const location = useLocation();
  const pathname = location.pathname;
  const pathParts = pathname.split("/");
  const category = pathParts.includes("category")
    ? pathParts[pathParts.indexOf("category") + 1]
    : null;

  let productQueryResult;
  if (category) {
    productQueryResult = useGetProductByCategoryQuery({
      category,
      limit,
      skip:
        viewType === "grid_b" && currentPage > 0
          ? (currentPage - 1) * limit
          : skip,
    });
  } else if (searchQuery) {
    productQueryResult = useSearchProductsQuery({
      query: searchQuery,
      limit,
      skip:
        viewType === "grid_b" && currentPage > 0
          ? (currentPage - 1) * limit
          : skip,
    });
  } else {
    productQueryResult = useGetProductListQuery({
      limit,
      skip:
        viewType === "grid_b" && currentPage > 0
          ? (currentPage - 1) * limit
          : skip,
    });
  }

  const {
    data: productList,
    error: listError,
    isLoading: listIsLoading,
  } = productQueryResult;

  const handleLoadMore = useCallback(
    (entries: any[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && hasMore) {
        setIsFetching(true);
        setCurrentPage((prev) => prev + 1);
      }
    },
    [isFetching, hasMore]
  );

  useEffect(() => {
    if (viewType === "grid_b") {
      const observer = new IntersectionObserver(handleLoadMore, {
        threshold: 0.5,
      });
      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }
      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      };
    }
  }, [loaderRef, handleLoadMore]);

  useEffect(() => {
    if (
      productList &&
      productList.products &&
      productList.products.length > 0
    ) {
      if (viewType === "grid_b") {
        setProducts((prevProducts) => [
          ...prevProducts,
          ...productList.products,
        ]);
        if (productList.products.length < limit) {
          setHasMore(false);
        }
        setIsFetching(false);
      } else {
        setProducts(productList.products);
      }
    }
  }, [productList, viewType]);

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
      {viewType === "grid_a" && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={productList!.total}
        />
      )}
      <section className="container mx-auto py-10 md:py-8 px-0 md:px-0">
        <div
          className={`p-5 md:p-0 grid  xs:grid-cols-1: gap-10 items-start ${
            viewType === "grid_a" ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {productList &&
            productList.products?.map((product: ProductType, index: any) => {
              const bgcolor = colors[index % colors.length];
              return (
                <div
                  key={product.id}
                  className={`p-4 border hover:border-neutral-300 items-center transform duration-500 hover:-translate-y-5 cursor-pointer  bg-opacity-5 hover:bg-opacity-10 bg-${bgcolor}-500`}
                >
                  <div
                    className={`flex gap-4 py-4 ${
                      viewType === "grid_a" ? "flex-row" : "flex-col"
                    }`}
                  >
                    <figure
                      className={`h-full  ${
                        viewType === "grid_a" ? "w-1/2" : "w-full"
                      }`}
                    >
                      <img
                        className="object-fill w-full"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </figure>
                    <div
                      className={`h-full  ${
                        viewType === "grid_a"
                          ? "w-1/2  text-left justify-start"
                          : "w-full text-center justify-center"
                      }`}
                    >
                      <h5 className="mb-2 text-xl font-semibold text-ellipsis line-clamp-1">
                        {product.title}
                      </h5>
                      <NavLink
                        className="mb-4 text-md  tracking-wider text-red-600 hover:text-red-900 capitalize hover:underline"
                        to={`/products/category/${product.category}`}
                      >
                        {product.category}
                      </NavLink>

                      <p className="mb-3 font-normal text-black text-ellipsis line-clamp-2 dark:text-neutral-400">
                        {product.description}
                      </p>
                      <p className="mt-5 text-md font-semibold text-neutral-400">
                        <span className="line-through">
                          £{(product.price + 20).toFixed(2)}
                        </span>
                      </p>
                      <h4 className="text-2xl mb-5 text-red-500 font-semibold">
                        £{product.price.toFixed(2)}
                      </h4>
                      <div
                        className={`flex flex-row items-center gap-8 ${
                          viewType === "grid_a"
                            ? "justify-between leading-normal"
                            : "w-full text-center justify-center"
                        }`}
                      >
                        <Rating />
                        <span
                          className={` top-5 right-5  ${
                            viewType === "grid_a"
                              ? ""
                              : "absolute top-5 right-5"
                          }`}
                        >
                          <AddToWishList bgcolor="#ff0000" />
                        </span>
                      </div>
                      <div
                        className={`flex place-items-end gap-4 space-y-6 leading-relaxed relative ${
                          viewType === "grid_a"
                            ? "justify-between"
                            : "justify-center"
                        }`}
                      >
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

      {viewType === "grid_a" && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={productList!.total}
        />
      )}
      {viewType === "grid_b" && (
        <div
          ref={loaderRef}
          className="bg-neutral-100 w-full h-[500px] flex justify-center items-center"
        >
          {isFetching && <p>Loading more...</p>}
        </div>
      )}
    </>
  );
};

export default PlpGrid;
