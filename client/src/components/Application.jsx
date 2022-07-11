import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from "./shared/TopNav";
import Board from "./board/Board";
import UISection from "./ui/UISection";
import CardEditingDescription from "./ui/CardEditingDescription";
import Card from "./ui/Card";
import SingleBoard from "./ui/SingleBoard";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/boards/62cbc5fe07edfc39c2767247" />}
        />
        <Route path="/boards/:id" element={<Board />} />
        <Route path="/ui" element={<UISection />} />
        <Route
          path="/ui/cardEditingDescription"
          element={<CardEditingDescription />}
        />
        <Route path="/ui/card" element={<Card />} />
        <Route path="/ui/singleBoard" element={<SingleBoard />} />
      </Routes>
    </div>
  );
};

export default Application;
