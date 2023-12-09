import React, { useId } from "react";
import "./input.css";
import SearchIcon from "../../assets/icons/SearchIcon";

export const Input = ({
  label,
  placeholder,
  errorMessage,
  value,
  onChange,
  isSearchInput,
}) => {
  const id = useId();
  return (
    <div className="container">
      <label htmlFor={id} className="label-container">
        {label && (
          <p className={errorMessage ? "labelErrorStyle" : "label"}>{label}</p>
        )}
        {isSearchInput && <SearchIcon />}
        <input
          value={value}
          onChange={onChange}
          id={id}
          className={errorMessage ? "inputErrorStyle" : "input"}
          placeholder={placeholder}
        />
      </label>
      {errorMessage && <p className="messageErrorStyle">{errorMessage}</p>}
    </div>
  );
};
