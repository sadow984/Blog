import React from "react";
import Header from "./Header/Header";
import Container from "./card/container/Container";
import Footer from "./Footer/Footer";
import { Route, Link } from "react-router-dom";

const Home = () => {
    
    return (
      <div>
        <Header />
        <Container />
        <Footer />
        {/* <Route path="/" exact component={Header} />
        <Route path="/" exact component={Container} />
        <Route path="/" exact component={Footer} /> */}
      </div>
    );
}

export default Home;