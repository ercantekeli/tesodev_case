import React from "react";
import "./SearchResults.css";
import { Layout, OrderBy, ResultOption, Pagination } from "../components";
import { useAppContext } from "../context/AppContext";

const SearchResult = () => {
  const { filteredData } = useAppContext();

  return (
    <Layout isResultPage>
      <div className="search-result_container">
        <div className="search-result-orderby">
          <OrderBy onSelect={(e) => console.log(e)} />
        </div>
        <div>
          <div className="">
            {filteredData &&
              filteredData.length > 0 &&
              filteredData?.map((item) => <ResultOption data={item} />)}
          </div>
        </div>
        <Pagination length={125} />
      </div>
    </Layout>
  );
};

export default SearchResult;
