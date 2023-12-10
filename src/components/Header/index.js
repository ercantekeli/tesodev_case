import React from "react";
import Logo from "../../assets/images/logo.png";
import { Button } from "../Button";
import "./Header.css";
import { Input } from "../Input";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = ({ isHome, isResultPage, isNewLinkPage }) => {
  const { inputText, setInputText } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className={`header-container ${isHome && "button-end"}`}>
      {isResultPage && (
        <div className="header-left">
          <img
            src={Logo}
            className="header-logo"
            alt="header-logo"
            onClick={() => navigate("/")}
          />
          <div className="header-input">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <Button buttonName="Search" />
        </div>
      )}

      <Button
        buttonName="Add new record"
        onClick={() => navigate("/newrecord")}
      />
    </div>
  );
};
