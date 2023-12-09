import React, { useState } from "react";
import "./OrderBy.css";
import SortIcon from "../../assets/icons/SortIcon";

export function OrderBy({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSetselectedOption] = useState();
  const [sortOptions] = useState([
    { id: 1, name: "Name ascending" },
    { id: 2, name: "Name descending" },
    { id: 3, name: "Year ascending" },
    { id: 4, name: "Year descending" },
  ]);
  return (
    <div className="orderby-container">
      <div className="main-orderby" onClick={() => setIsOpen(!isOpen)}>
        <SortIcon />
        Order By
      </div>
      {isOpen && (
        <div className="options-container">
          {sortOptions.map((option) => (
            <div
              className={
                selectedOption === option?.id ? "selected-option" : "option"
              }
              onClick={() => {
                setIsOpen(false);
                onSelect(option.id);
                setSetselectedOption(option?.id);
              }}
            >
              {option?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
