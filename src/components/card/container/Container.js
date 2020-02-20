import React from "react";
import Cards from "../cards/Cards";
import classes from "./Container.module.css";

const Container = () => {
  return (
    <div>
      <span>Recent</span>
      <div className={classes.Recent}>
        <Cards />
      </div>
      <span>Popular</span>
      <div className={classes.Popular}>
        <Cards />
      </div>
      <span>Recent</span>
      <div className={classes.Recent}>
        <Cards />
      </div>
      <span>Popular</span>
      <div className={classes.Popular}>
        <Cards />
      </div>
    </div>
  );
};

export default Container;
