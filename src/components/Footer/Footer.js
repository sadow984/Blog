import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.MainFooter}>
      <div className={classes.LogoWrapper}>
        <span>BG</span>
      </div>
      <nav>
        <ul className={classes.MainFooterLinks}>
          <li className={classes.MainFooterLink}>
            <a href="/">Privacy</a>
          </li>
          <li className={classes.MainFooterLink}>
            <a href="/">About</a>
          </li>
          <li className={classes.MainFooterLink}>
            <a href="/">Help</a>
          </li>
          <li className={classes.MainFooterLink}>
            <a href="/">Support</a>
          </li>
          <li className={classes.MainFooterLink}>
            <a href="/">Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
);
};

export default Footer;
