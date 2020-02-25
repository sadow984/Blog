import React from "react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import BlogPage from "../../components/card/BlogPage";

const Router = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={BlogPage} />
    </div>
  );
};

export default Router;