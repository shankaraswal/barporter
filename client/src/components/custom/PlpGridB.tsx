import React, { useRef, useCallback, useState, useEffect } from "react";
import { useGetProductListQuery } from "../../features/products/productService";
import { PlpCardB } from "../../components/index";
import { ProductType } from "../../features/products/product.types";

const PlpGridB = ({ colors }: { colors: string[] }) => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

  const { data, error, isLoading } = useGetProductListQuery(
    { limit: 15, skip: page > 0 ? (page - 1) * 15 : 1 },
    { skip: false }
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
    if (data && data.products && data.products.length > 0) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      if (data.products.length < 12) {
        setHasMore(false);
      }
      setIsFetching(false);
    }
  }, [data]);

  return (
    <>
      <section className="p-5  grid grid-cols-3 gap-10 items-start">
        {error && <p>Error loading data.</p>}
        {products.length === 0 && !error && !isFetching && (
          <p>No products found.</p>
        )}
        {products.map((product: ProductType, index: number) => {
          const bgColorClass = colors[index % colors.length];
          return (
            <PlpCardB
              key={product.id}
              product={product}
              bgcolor={bgColorClass}
            />
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
