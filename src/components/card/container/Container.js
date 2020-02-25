import React from "react";
import Cards from "../cards/Cards";
import classes from "./Container.module.css";

const Container = () => {
<<<<<<< HEAD
    

    return (
      <div>
        <span>Recent</span>
        <Cards />
        <Cards />
        <span>Popular</span>
        <Cards />
=======
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
>>>>>>> 4a5b1184050b9971f6891cdcad34e17f65600fd9
        <Cards />
      </div>
    </div>
  );
};

export default Container;
