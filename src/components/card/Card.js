import React from "react";
import classes from "./Card.module.css";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className={classes.CardContainer}>
      <Link
        to={{pathname: "/blog", title: props.title, date:props.date, data:props.data}}>
        <img
          src={props.image}
          className={classes.ImageContainer}
          onClick={props.clicked}
        ></img>
      </Link>
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
