//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>Hello, world!</h1>
    <p>Created by Glenn Haertlein</p>
    <p>
      Copyright: 2021. The year our republic was taken from us and applauded by
      our fellow countrymen.
    </p>
  </div>,
  document.getElementById("root")
);
