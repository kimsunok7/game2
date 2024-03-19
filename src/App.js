import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Box from "./component/Box";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKxqdZ91Xk3TVm7HotyQQYlZU9j1xCHDyFg&usqp=CAU",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("null");
  const [computerSelect, setcomputerSelect] = useState("null");
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
    } else if (user.name == "Rock"){
      return computer.name == "Scissors" ? "win" : "lose";
    }
     
    else if (user.name == "Paper"){
      return computer.name == "Rock" ? "win" : "lose";
    }
     
    else if (user.name == "Scissors"){
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
        <Container> 
          <Row>
        <Col>
        <Button variant="primary"  onClick={() => play("scissors")}>가위</Button>
      <Button variant="primary"  onClick={() => play("rock")}>바위</Button>
      <Button variant="primary"  onClick={() => play("paper")}>보</Button>

        </Col>
      </Row>
      </Container>
      

       
      
     
     
     
    </div>
  );
}

export default App;
