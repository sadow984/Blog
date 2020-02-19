import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <div className={classes.logoDiv}>
          <span>BG</span>
        </div>
      </div>
      <div className={classes.link}>
        <a href="">Privacy</a>
        <a href="">About</a>
        <a href="">Help</a>
      </div>
    </div>
  );
};

export default Footer;