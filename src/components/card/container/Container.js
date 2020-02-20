import React from "react";
import Cards from "../cards/Cards";
import classes from "./Container.module.css";

const Container = () => {
  return (
    <div className={classes.ContainerWrapper}>
      <span className={classes.CategoryName}>Recent</span>
      <div className={classes.Recent}>
        <Cards />
      </div>
      <span className={classes.CategoryName}>Popular</span>
      <div className={classes.Popular}>
        <Cards />
      </div>
      <span className={classes.CategoryName}>Recent</span>
      <div className={classes.Recent}>
        <Cards />
      </div>
      <span className={classes.CategoryName}>Popular</span>
      <div className={classes.Popular}>
        <Cards />
      </div>
    </div>
  );
};

export default Container;
