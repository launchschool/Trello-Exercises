import { useReducer } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from "./shared/TopNav";
import Board from "./board/Board";
import UISection from "./ui/UISection";
import CardEditingDescription from "./ui/CardEditingDescription";
import Card from "./ui/Card";
import SingleBoard from "./ui/SingleBoard";
import { reducer, initialState } from "../reducers/reducer";

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/boards/62cbc5fe07edfc39c2767247" />}
        />
        <Route
          path="/boards/:id"
          element={<Board state={state} dispatch={dispatch} />}
        />
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
