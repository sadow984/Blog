import React, { useState } from "react";
import Card from "../Card";
import demoImage from "./flutterReact.png";

const Cards = () => {
 
  let month= ["January","February","March","April","May","June","July",
              "August","September","October","November","December"];

  let tempDate = new Date();
  const Month= month[tempDate.getMonth()];
  let date = Month + " " + tempDate.getDate() + " " + tempDate.getFullYear();
   
  let cards = [
    {cardImage: demoImage,date: date,title: "What Flutter is ?",clap: 0},
    { cardImage: demoImage, date: date, title: "How Flutter Works ?", clap: 0 }];
  
  const [count, setCount] = useState(cards);

  const increaseClapHandler = cardindex => {
    
    setCount(count.map((ini, index) => {
      if (index === cardindex)
        ini.clap += 1
      return (
        ini
      )
    })
    );
  }
    
  return count.map((cur, index) => {
    return (
      <Card
        image={cur.cardImage}
        date={cur.date}
        title={cur.title}
        clap={() => increaseClapHandler(index)}
        counts={cur.clap}
      />
    );
  });
};

export default Cards;
