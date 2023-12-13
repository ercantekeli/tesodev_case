import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import { Layout, OrderBy, ResultOption, Pagination } from "../components";
import { useAppContext } from "../context/AppContext";

const SearchResult = () => {
  const { filteredData } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [orderBy, setOrderBy] = useState(null);
  const [sortedData, setSortedData] = useState(filteredData);

  const handleOrderByChange = (orderOption) => {
    setOrderBy(orderOption);
  };

  useEffect(() => {
    let newSortedData = [...filteredData];

    if (orderBy) {
      switch (orderBy) {
        case 1:
          newSortedData.sort((a, b) =>
            a.name && b.name ? a.name.localeCompare(b.name) : 0
          );
          break;
        case 2:
          newSortedData.sort((a, b) =>
            a.name && b.name ? b.name.localeCompare(a.name) : 0
          );
          break;
        case 3:
          newSortedData.sort((a, b) =>
            a.year && b.year ? a.year - b.year : 0
          );
          break;
        case 4:
          newSortedData.sort((a, b) =>
            a.year && b.year ? b.year - a.year : 0
          );
          break;
        default:
          break;
      }
    }

    setSortedData(newSortedData);
  }, [orderBy, filteredData]);

  return (
    <Layout isResultPage>
      <div className="search-result_container">
        <div className="search-result-orderby">
          <OrderBy
            onSelect={(selectedOption) => handleOrderByChange(selectedOption)}
          />
        </div>
        <div>
          <div className="">
            {sortedData &&
              sortedData.length > 0 &&
              sortedData
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item) => <ResultOption data={item} key={item.id} />)}
          </div>
        </div>
        <Pagination
          length={sortedData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Layout>
  );
};

export default SearchResult;
