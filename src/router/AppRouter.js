import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResult from "./../pages/SearchResult";
import Main from "./../pages/Main";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/searchresult" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
