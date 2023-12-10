import React from "react";
import "./searchSummary.css";
import { MapPinIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

export function SearchSummary({ data }) {
  const navigate = useNavigate();
  return (
    <div className="search-summary">
      {data && data.length > 0 ? (
        data.slice(0, 3).map((item, index) => (
          <div key={index} className="search-summary-container">
            <MapPinIcon />
            <div>
              <p className="first-text">{item[7]}</p>
              <p className="second-text">{item[6]}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}

      {data?.length > 3 && (
        <p onClick={() => navigate("/searchresult")} className="show-more">
          Show more...
        </p>
      )}
    </div>
  );
}
