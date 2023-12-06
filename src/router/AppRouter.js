import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import searchResult from "../pages/searchResult";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/searchresult" element={<searchResult />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;