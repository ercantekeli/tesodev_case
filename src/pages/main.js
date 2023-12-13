import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import CarouselPic from "../assets/images/carouselPic.png";
import CarouselPic2 from "../assets/images/CarouselPic-2.jpg";
import {
  Button,
  Carousel,
  Footer,
  Input,
  Layout,
  SearchSummary,
} from "../components";
import "./Main.css";
import { useAppContext } from "../context/AppContext";

const Main = () => {
  const { inputText, setInputText, setFilteredData, filteredData, allData } =
    useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (inputText) {
      getData();
    } else {
      setFilteredData([]);
    }
  }, [inputText]);

  useEffect(() => {
    setInputText("");
  }, []);

  const getData = () => {
    const newData = allData?.data.filter((item) =>
      item[1].toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredData(newData);
  };

  const items = [
    {
      src: CarouselPic,
      alt: "Carousel Pic",
      description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      person: "Troy Corlson",
    },
    {
      src: CarouselPic2,
      alt: "Carousel Pic 2",
      description: "Brown Rocky Mountain Under Blue Sky",
      time: "2h ago",
      person: "Nick Wehrli",
    },
    {
      src: CarouselPic,
      alt: "Carousel Pic",
      description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      person: "Troy Corlson",
    },
    {
      src: CarouselPic2,
      alt: "Carousel Pic 2",
      description: "Brown Rocky Mountain Under Blue Sky",
      time: "2h ago",
      person: "Nick Wehrli",
    },
    {
      src: CarouselPic,
      alt: "Carousel Pic",
      description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      person: "Troy Corlson",
    },
    {
      src: CarouselPic2,
      alt: "Carousel Pic 2",
      description: "Brown Rocky Mountain Under Blue Sky",
      time: "2h ago",
      person: "Nick Wehrli",
    },
  ];

  return (
    <Layout isHome>
      <div className="main-logo">
        <img src={Logo} alt="logo" />
        <span className="logo-text">Search app</span>
      </div>
      <div className="main-container">
        <div className="main-text-container">
          <h1 className="main-text">Find in records</h1>
        </div>
        <div className="search-container">
          <div className="input-btn">
            <Input
              placeholder="Placeholder"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              isSearchInput
            />
          </div>
          <div className="search-btn">
            <Button
              disabled={!inputText}
              onClick={() => navigate("/searchresult")}
              buttonName="Search"
            />
          </div>
        </div>
        {filteredData && filteredData?.length > 0 && (
          <SearchSummary data={filteredData} />
        )}
      </div>
      <div className="top-news">Top News</div>
      <Carousel items={items} />
      <Footer />
    </Layout>
  );
};

export default Main;
