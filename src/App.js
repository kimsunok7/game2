import { useState } from "react";

import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "img/rock.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "img/si.jpg",
  },
  paper: {
    name: "Paper",
    img: "img/bo.jpg",
  },
  default:{
    name : "aa",
    img : "https://t1.daumcdn.net/cfile/tistory/9952FF4F5E0EED152C"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(choice.default);
  const [computerSelect, setcomputerSelect] = useState(choice.default);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log("가위선택")
    // console.log("선택", userChoice)
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "win" : "lose";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "win" : "lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "win" : "lose";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("itemArray", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("random value", randomItem);
    let final = itemArray[randomItem];
    // console.log("final", final);
    return choice[final];
  };
  return (
    <div className="wrap">
      <h3>가위바위보 게임</h3>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <img
        className="w50"
        src={process.env.PUBLIC_URL + "img/si.jpg"}
        onClick={() => play("scissors")}
      ></img>
      <img
        className="w50"
        src={process.env.PUBLIC_URL + "img/rock.jpg"}
        onClick={() => play("rock")}
      ></img>
      <img
        className="w50"
        src={process.env.PUBLIC_URL + "img/bo.jpg"}
        onClick={() => play("paper")}
      ></img>
    </div>
  );
}

export default App;
