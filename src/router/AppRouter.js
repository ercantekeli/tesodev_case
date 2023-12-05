import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/main";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;