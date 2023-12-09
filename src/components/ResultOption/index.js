import React from "react";
import { MapPinIcon } from "../../assets";
import "./ResultOption.css";

export function ResultOption({ data }) {
  return (
    <div className="result-option-container">
      <div className="result-option_container__inner">
        <div className="result-option-left">
          <MapPinIcon />
          <div>
            <p className="address-first">18th Street Brewery</p>
            <p className="address-second">Oakley Avenue, Hammond, IN</p>
          </div>
        </div>
        <div>
          <p className="result-name">Jane Doe</p>
          <p className="result-date">01/20/2021</p>
        </div>
      </div>
    </div>
  );
}
