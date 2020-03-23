import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routers/Router";

const App = () => (
  <BrowserRouter>
    <div>
      <Router />
    </div>
  </BrowserRouter>

);

export default App;