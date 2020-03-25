import React from "react";
import classes from "./Card.module.css";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className={classes.CardContainer}>
      <Link className={classes.Link}
        to={{
          pathname: "/blog",
          title: props.title,
          date: props.date,
          data: props.data,
          count: props.counts,
          clap: props.clap
        }}
      >
        <div className={classes.CardBody}>
          <div
            className={classes.CardImage}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <div className={classes.CardInfo}>
            <div className={classes.CardInfoDetails}>
              <span className={classes.CardCategory}> Development</span>
              <h3 className={classes.CardTitle}>{props.title}</h3>
              <span className={classes.CardBy}>
                by
                <a href="#" className={classes.CardAuthor} title="author">
                  Jhon Doe
                </a>{" "}
                on {props.date}
              </span>
            </div>
            <div className={classes.LikeButton}>
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
        </div>
      </Link>
    </div>
  );
};

export default Card;
