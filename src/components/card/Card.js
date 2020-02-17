import React from 'react';
// import myCard from './flutterReact.png';
import classes from './Card.css';

const Card =props => {
    // let style = {
    //     backgroundImage: 'url(' + myCard + ')',
    //     width:'10%'
    // };


    return (
      // Give border to whole card
        
      <div className={classes.Card}>
        <div  className={classes.CardHeader}>
          <img src={props.image} alt="hello"/>
        </div>
        <div className="CardBody">
          <p className="Date">{props.date}</p>
          <h2>{props.title}</h2>
        </div>
      </div>
    );

}

export default Card;