import "./App.css";
import MainPage from "./main";
import React from "react";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/upload"} element={<UploadPage />} />
        <Route path={"/product/:id"} element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
