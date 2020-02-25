import React, { useState } from "react";
import Card from "../Card";
import demoImage from "./flutterReact.png";
import BlogPage from "../BlogPage";
import cards from "../data/CardData";

const Cards = () => {
  const [count, setCount] = useState(cards);
  // const [click, setClick] = useState(true);

  const increaseClapHandler = cardindex => {
    setCount(
      count.map((ini, index) => {
        if (index === cardindex) ini.clap += 1;
        return ini;
      })
    );
  };

  const clickedHandler = imageindex => {
    count.map((ini, index) => {
      return ini;
    });
  };

  return count.map((cur, index) => {
    console.log("hello");
    return (
      <div>
        <Card
          image={cur.cardImage}
          date={cur.date}
          title={cur.title}
          clap={() => increaseClapHandler(index)}
          counts={cur.clap}
          clicked={() => clickedHandler(index)}
          data={cur.data}
        />
        {/* {check} */}
      </div>
    );
  });
};

export default Cards;
