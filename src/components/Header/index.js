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
      <div className="header-left">
        {(isResultPage || isNewLinkPage) && (
          <img
            src={Logo}
            className="header-logo"
            alt="header-logo"
            onClick={() => navigate("/")}
          />
        )}
        {isNewLinkPage && (
          <h1
            style={{
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#484848",
            }}
            onClick={() => {
              navigate("/searchresult");
            }}
          >
            {" "}
            ⬅ Return to List Page
          </h1>
        )}
        {isResultPage && (
          <div className="header-input">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
        )}
        {isResultPage && <Button buttonName="Search" />}
      </div>
      {(isResultPage || isHome) && (
        <Button
          buttonName="Add new record"
          onClick={() => navigate("/newrecord")}
        />
      )}
    </div>
  );
};
