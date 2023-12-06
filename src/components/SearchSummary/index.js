import React from "react";
import "./searchSummary.css";
import { MapPinIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

export function SearchSummary({ data }) {
const navigate = useNavigate()
  return (
    <div className="search-summary">
      {data &&
        data?.map((item) => (
          <div className="search-summary-container">
            <MapPinIcon />
            <div>
              <p className="first-text">cxc</p>
              <p className="second-text">cx</p>
            </div>
          </div>
        ))}
        <p onClick={()=>navigate('/searchresult')} className="show-more">Show more ...</p>
    </div>
  );
}
