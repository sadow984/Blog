import React from "react";
import Card from "../Card";
import myCard from "./flutterReact.png";

const Cards = () => {
  let tempDate = new Date();
  let date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate();
  let cards = [
    {
      CardImage:
        "myCard",
      Date: date,
      Title: "What Flutter is ?"
    },
    {
      CardImage: "myCard",
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
