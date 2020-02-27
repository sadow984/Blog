import React from "react";
import classes from "./BlogPage.module.css";
import Footer from "../Footer/Footer";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const BlogPage = props => {
  return (
    <div>
      <div className={classes.title}>
        <h1>{props.location.title}</h1>
      </div>
      <div className={classes.data}>
        <p>{props.location.data}</p>
      </div>
      <div className={classes.count}>
        <IconButton
          // onClick={props.loaction.clap}
          color="secondary"
          disableRipple="true"
          disableFocusRipple="true"
          size="small"
          edge="end"
        >
          <FavoriteIcon />
          <h5>claps{props.location.count}</h5>
        </IconButton>
        <h5>{props.location.date}</h5>
      </div>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default BlogPage;
