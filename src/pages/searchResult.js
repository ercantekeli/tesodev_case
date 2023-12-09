import React from "react";
import "./SearchResults.css";
import { Layout, OrderBy, ResultOption } from "../components";

const SearchResult = () => {
  return (
    <Layout isResultPage>
      <div className="search-result_container">
        <div className="search-result-orderby">
          <OrderBy onSelect={(e) => console.log(e)} />
        </div>
        <div>
          <div className="">
            <ResultOption />
            <ResultOption />
            <ResultOption />
            <ResultOption />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResult;
