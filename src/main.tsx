import { StrictMode } from "react";
import { render } from "react-dom";
import FoodPlanner from "./FoodPlanner";
import './main.css';

render(
  <StrictMode>
    <FoodPlanner />
  </StrictMode>,
  document.getElementById("root")
);
