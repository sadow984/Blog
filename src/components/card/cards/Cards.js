import React, { useState } from "react";
import Card from "../Card";
import demoImage from "./flutterReact.png";

const Cards = () => {
  const [count, setCount] = useState(0);

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let tempDate = new Date();
  const Month = month[tempDate.getMonth()];
  let date = Month + " " + tempDate.getDate() + " " + tempDate.getFullYear();

  let cards = [
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "What Flutter is ?",
      clap: count
    },
    {
      cardImage: demoImage,
      date: date,
      title: "How Flutter Works ?",
      clap: count
    }
  ];

  const increaseClapHandler = cardindex => {
    const newCards = [...cards];
    setCount(newCards[cardindex].clap + 1);
  };

  return cards.map((cur, index) => {
    return (
      <Card
        image={cur.cardImage}
        date={cur.date}
        title={cur.title}
        clap={() => increaseClapHandler(index)}
        count={cur.clap}
      />
    );
  });
};

export default Cards;