import React, { useRef, useCallback, useState, useEffect } from "react";
import { useGetProductListQuery } from "../features/products/productService";
import { PCard } from "../components/index";
import { ProductType } from "@/src/features/products/product.types";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

  const { data, error, isLoading } = useGetProductListQuery(
    { limit: 12, skip: (page - 1) * 10 },
    { skip: !hasMore }
  );

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
      threshold: 1.0,
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
    if (data && data.products && data.products.length > 0) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      if (data.products.length < 10) {
        setHasMore(false);
      }
      setIsFetching(false);
    }
  }, [data]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2">
        {error && <p>Error loading data.</p>}
        {products.length === 0 && !error && !isFetching && (
          <p>No products found.</p>
        )}
        {products.map((product: ProductType) => (
          <PCard key={product.id} product={product} />
        ))}
      </div>
      <div
        ref={loaderRef}
        style={{ height: "20px", backgroundColor: "transparent" }}
      >
        {isFetching && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
