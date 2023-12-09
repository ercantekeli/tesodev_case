import React from "react";
import Logo from "../../assets/images/logo.png";
import { Button } from "../Button";
import "./Header.css";
import { Input } from "../Input";

export const Header = ({ isHome, isResultPage, isNewLinkPage }) => {
  return (
    <div className={`header-container ${isHome && "button-end"}`}>
      {isResultPage && (
        <div className="header-left">
          <img src={Logo} className="header-logo" alt="header-logo" />
          <div className="header-input">
            <Input />
          </div>
          <Button buttonName="Search" />
        </div>
      )}

      <Button buttonName="Add new record" />
    </div>
  );
};
