import React from "react";

import "./App.css";
import Header from "../components/Header/Header";
import Container from "../components/card/container/Container";
import Footer from "../components/Footer/Footer";

const App = () => (
  <div>
    <div className="App">
      <Header />
      <Container />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
