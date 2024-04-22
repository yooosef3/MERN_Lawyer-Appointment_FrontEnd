"use client";

import { PaginationProps } from "@/app/types/types";

const Pagination = ({
  handlePageChange,
  currentPage,
  pageNumbers,
  totalPages,
}:PaginationProps) => {
  return (
    <div className="flex gap-2 my-10 justify-center lg:mr-44 z-20">
      <button
        className="bg-green cursor-pointer lg:hover:bg-lemon-100 duration-200 text-white px-3 py-2 rounded-lg"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        قبلی
      </button>
      {pageNumbers.map((pageNumber:number) => (
        <button
          key={pageNumber}
          className={`px-3 py-2 rounded-lg ${
            pageNumber === currentPage
              ? "bg-green lg:hover:bg-lemon-100 duration-200 text-white"
              : "bg-white text-gray-500 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="bg-green cursor-pointer lg:hover:bg-lemon-100 duration-200 text-white px-3 py-2 rounded-lg"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
