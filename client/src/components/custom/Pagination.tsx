import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: any;
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const goToFirstPage = () => onPageChange(1);
  const goToLastPage = () => onPageChange(totalPages);
  const goToNextPage = () => onPageChange(currentPage + 1);
  const goToPreviousPage = () => onPageChange(currentPage - 1);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        onClick={goToFirstPage}
        className="px-4 py-2 border bg-white text-neutral-500"
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        onClick={goToPreviousPage}
        className="px-4 py-2 border bg-white text-neutral-500"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border ${
            page === currentPage
              ? "bg-neutral-500 text-white"
              : "bg-white text-neutral-500"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className="px-4 py-2 border bg-white text-neutral-500"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        onClick={goToLastPage}
        className="px-4 py-2 border bg-white text-neutral-500"
        disabled={currentPage === totalPages}
      >
        Last
      </button>
      [{totalItems}]
    </div>
  );
};

export default Pagination;
