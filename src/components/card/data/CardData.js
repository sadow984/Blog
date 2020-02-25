import React from "react";

import demoImage from "../cards/flutterReact.png";

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
    clap: 0,
    data:
      "Flutter is a free and open-source mobile UI framework created by Google and released in May 2017. In a few words, it allows you to create a native mobile application with only one codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS and Android)."
  },
  {
    cardImage: demoImage,
    date: date,
    title: "How Flutter Works ?",
    clap: 0,
    data:
      "Starting at a very high level, your app is composed of Widgets, that are rendered onto a Skia canvas, and sent to the platform. The platform shows the canvas, and sends events back as required.Your app runs on the platform in natively, Ahead of Time complied."
  }
];

export default cards;
