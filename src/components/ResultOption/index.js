import React from "react";
import { MapPinIcon } from "../../assets";
import "./ResultOption.css";

export function ResultOption({ data }) {
  return (
    <div className="result-option-container">
      <div className="result-option_container__inner">
        <div className="result-option_left">
          <MapPinIcon />
          <div>
            <p className="address-first">{data[7]}</p>
            <p className="address-second">{data[6]}</p>
          </div>
        </div>
        <div className="result-option_right">
          <p className="result-name">{data[1]}</p>
          <p className="result-date">{data[8]}</p>
        </div>
      </div>
    </div>
  );
}
