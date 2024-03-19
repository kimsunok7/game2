import React from "react";

const Box = (props) => {
  console.log("props", props);
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  let num = props.num;
  console.log("num", num);
  return (
    <div className={`box {result}`}>
      <h1>{props.title}</h1>

      <img className="item-img" src={props.item && props.item.img} />

      <h2>{result}</h2>
    </div>
  );
};

export default Box;
