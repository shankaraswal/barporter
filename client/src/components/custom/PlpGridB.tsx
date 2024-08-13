import React, { useRef, useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetProductListQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
} from "../../features/products/productService";
import { ProductType } from "../../features/products/product.types";
import { Pagination, CartIcon, Rating, AddToWishList } from "../../components";
import { colors } from "../../constants";

const PlpGridB = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

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
      limit: 30,
      skip: page > 0 ? (page - 1) * 30 : 1,
    });
  } else if (searchQuery) {
    productQueryResult = useSearchProductsQuery({
      query: searchQuery,
      limit: 30,
      skip: page > 0 ? (page - 1) * 30 : 1,
    });
  } else {
    productQueryResult = useGetProductListQuery({ limit: 30, skip: 0 });
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
        setPage((prev) => prev + 1);
      }
    },
    [isFetching, hasMore]
  );

  useEffect(() => {
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
  }, [handleLoadMore]);

  useEffect(() => {
    if (
      productList &&
      productList.products &&
      productList.products.length > 0
    ) {
      setProducts((prevProducts) => [...prevProducts, ...productList.products]);
      if (productList.products.length < 12) {
        setHasMore(false);
      }
      setIsFetching(false);
    }
  }, [productList]);

  if (listIsLoading) return <div>Loading...</div>;
  if (listError)
    return (
      <div>
        Error:
        {"message" in listError ? listError.message : "An error occurred"}
      </div>
    );

  const totalPages = Math.ceil(productList!.total / 30);

  return (
    <>
      <section className="grid grid-cols-3 gap-10 items-start">
        {listError && <p>Error loading productList.</p>}
        {products.length === 0 && !listError && !isFetching && (
          <p>No products found.</p>
        )}
        {products.map((product: ProductType, index: number) => {
          const bgcolor = colors[index % colors.length];
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
              <p
                className="block mb-4 text-md  tracking-wider text-red-600 hover:text-red-900 capitalize hover:underline"
                onClick={() =>
                  navigate(`/products/category/${product.category}`)
                }
              >
                {product.category}
              </p>
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
        })}
      </section>
      <div
        ref={loaderRef}
        className="bg-neutral-100 w-full h-[500px] flex justify-center items-center"
      >
        {isFetching && <p>Loading more...</p>}
      </div>
    </>
  );
};

export default PlpGridB;
