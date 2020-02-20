import React from "react";
import classes from "./Card.module.css";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Card = props => {
  return (
    <div className={classes.CardContainer}>
      <img src={props.image} className={classes.ImageContainer}></img>
      <div className={classes.CardBody}>
        {/* <div className={classes.Author}></div> */}
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <IconButton
          onClick={props.clap}
          color="secondary"
          disableRipple="true"
          disableFocusRipple="true"
          size="small"
          edge="end"
        >
          <FavoriteIcon />
          {props.counts}
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
