import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import CarouselPic from "../assets/images/carouselPic.png";
import { Button, Carousel, Footer, Input, SearchSummary } from "../components";
import "./Main.css";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Button buttonName="Add new record" />
      <div className="main-logo">
        <img src={Logo} />
        <span className="logo-text">Search app</span>
      </div>
      <div className="main-container">
        <div>
          <h1 className="main-text">Find in records</h1>
          <div className="input-btn">
            <Input
              placeholder="Placeholder"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="search-btn" >
              <Button disabled={!inputText} onClick={()=>navigate('/searchresult')}  buttonName="Search" />
            </div>
          </div>
        </div>
          {inputText && (
          <SearchSummary data={[[
            1,
            "Barris Dusting",
            "Pixonyx",
            "bdusting0@tamu.edu",
            "499-866-1927",
            "https://loc.gov/ultricies/eu/nibh/quisque/id/justo.jsp",
            "China",
            "Yanshi",
            "5/10/2021"
          ],
          [
            2,
            "Jake Barok",
            "Einti",
            "jbarok1@ebay.co.uk",
            "810-950-3191",
            "https://drupal.org/vel.png",
            "China",
            "Leyuan",
            "6/28/2021"
          ],
          [
            3,
            "Coretta Chicchelli",
            "Mymm",
            "cchicchelli2@discovery.com",
            "261-444-3224",
            "https://liveinternet.ru/pede.jsp",
            "Denmark",
            "København",
            "7/5/2021"
          ]]}/>
          )}
      </div>
      <Carousel>
        <>
          <div>
            <img src={CarouselPic} />
            <div>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</div>
            <div>1h ago · by Troy Corlson</div>
          </div>
          <div>
            <img src={CarouselPic} />
            <div>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</div>
            <div>1h ago · by Troy Corlson</div>
          </div>
          <div>
            <img src={CarouselPic} />
            <div>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</div>
            <div>1h ago · by Troy Corlson</div>
          </div>
        </>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Main;
