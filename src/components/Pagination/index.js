import React from "react";
import "./Pagination.css";

export const Pagination = ({
  length,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(length / itemsPerPage);
  const maxPageButtons = 5;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPageButtons) {
      const halfMaxButtons = Math.floor(maxPageButtons / 2);

      if (currentPage <= halfMaxButtons + 1) {
        endPage = maxPageButtons;
      } else if (currentPage >= totalPages - halfMaxButtons) {
        startPage = totalPages - maxPageButtons + 1;
      } else {
        startPage = currentPage - halfMaxButtons;
        endPage = currentPage + halfMaxButtons;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`pagination-item ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <li key="ellipsis-start" className="ellipsis">
          ...
        </li>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <li key="ellipsis-end" className="ellipsis">
          ...
        </li>
      );
    }

    return pageNumbers;
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, length);
  const displayedData = `Displaying ${startIndex} - ${endIndex} of ${length} results`;

  return (
    <div className="pagination-container">
      <ul className="pagination-list">{renderPageNumbers()}</ul>
      <div className="pagination-info">{displayedData}</div>
    </div>
  );
};
