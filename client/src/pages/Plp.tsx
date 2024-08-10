import React, { useState } from "react";
import { useGetProductListQuery } from "../features/products/productService";
import { Card } from "../components/index";
import { Pagination } from "../components/index";
import { ProductType } from "../features/products/product.types";

const Plp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 24;
  const skip = (currentPage - 1) * limit;

  const {
    data: productList,
    error: listError,
    isLoading: listIsLoading,
  } = useGetProductListQuery({ limit, skip });

  if (listIsLoading) return <div>Loading...</div>;
  if (listError)
    return (
      <div>
        Error:{" "}
        {"message" in listError ? listError.message : "An error occurred"}
      </div>
    );

  const totalPages = Math.ceil(productList!.total / limit);

  return (
    <>
      <h2 className="text-6xl text-teal-900 mb-6 font-semibold">Item List</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1: gap-10">
        {productList &&
          productList.products?.map((product: ProductType) => (
            <Card product={product} key={product.id} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Plp;
