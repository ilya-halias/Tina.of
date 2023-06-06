import React from "react";
import { Footer } from "./components/organisms/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { ReturnGoods } from "./components/organisms/footer/returnGoods/returnGoods";
import { MainPage } from "./components/organisms/mainPage/mainePage";
import { Declaration } from "./components/molecules/declaration/declaration";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path={"/returnGoods"} element={<ReturnGoods />} />
        <Route path={"/declaration"} element={<Declaration />} />
      </Routes>
      <Footer />
    </>
  );
};
