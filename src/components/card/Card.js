import React from 'react';
import classes from './Card.module.css';

const Card =props => {
    return (
      <div className={classes.CardContainer}>
        <img src={props.image} className={classes.ImageContainer}>
        </img>
        <div className={classes.CardBody}>
          <h2>{props.title}</h2>
          <p>{props.date}</p>
        </div>
      </div>
    );

}

export default Card;