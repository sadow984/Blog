import React from "react";
import Card from "../Card";
import demoImage from "./flutterReact.png";

const Cards = () => {
 
  let month= ["January","February","March","April","May","June","July",
              "August","September","October","November","December"];

  let tempDate = new Date();
  const Month= month[tempDate.getMonth()];
  let date =
    Month +
    " " +
    tempDate.getDate() +
    " " +
    tempDate.getFullYear();
  let cards = [
    {
      CardImage:
        demoImage,
      Date: date,
      Title: "What Flutter is ?"
    },
    {
      CardImage: demoImage,
      Date: date,
      Title: "How Flutter Works ?"
    }
  ];

  return cards.map(cur => {
    return (
      <Card
        image={cur.CardImage}
        date={cur.Date}
        title={cur.Title}
      />
    );
  });
};

export default Cards;
