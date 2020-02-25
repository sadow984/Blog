import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routers/Router";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Router />
    </div>
  </BrowserRouter>
);

export default App;
