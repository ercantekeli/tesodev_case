import React, { useState, useEffect } from "react";

export const Pagination = ({ length }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [length]);

  const totalPages = Math.ceil(length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      // Render the first 3 pages
      for (let i = 1; i <= 3; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      }

      // Render dots if currentPage is beyond the first 3 pages
      if (currentPage > 3) {
        pages.push(<span key="dots1">...</span>);
      }

      // Render the last 3 pages and dots
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
      )}
      {renderPagination()}
      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};
