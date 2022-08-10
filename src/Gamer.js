import React, { useState } from "react";
import UseInput from "./hooks/UseInput";

const Gamer = () => {
  const randInt = (lowValue, highValue) => {
    var range = highValue - lowValue + 1;
    console.log(Math.trunc(Math.random() * range + lowValue));
    return Math.trunc(Math.random() * 10) + 1;
  };
  const [lowValue, handleChangeL, resetH] = UseInput(0);
  const [highValue, handleChangeH, resetL] = UseInput(10);
  let [userInput, handleUserInput, resetU] = UseInput("");
  const [lastSeen, setLastSeen] = useState(0);
  const [val, handleVal] = useState(`${0} and ${10}`);
  const [randomN, setRandomN] = useState(randInt(lowValue, highValue));
  const [title, setTitle] = useState("");

  const handleClick = () => {
    setLastSeen(userInput);
    let msg;
    if (userInput > randomN) {
      msg = <p className="red">Too High, Try Again!;</p>;
    } else if (userInput < randomN) {
      msg = <p className="yellow">Too Low, Try Again!;</p>;
    } else msg = " Correct, You win!!!!";
    setTitle(msg);
  };
  const handleReset = () => {
    handleVal(` ${lowValue} and ${highValue}`);
    setRandomN(randInt(lowValue, highValue));
  };
  return (
    <>
      <div class="gameheader">
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Guessing game
        </h1>
        <div>{title}</div>
        <p>*Guess the number between {val}*</p>
        <p>Last Seen: {lastSeen} </p>
        <div>
          <input
            className="inputs"
            type="number"
            value={userInput}
            onChange={handleUserInput}
          />
        </div>
        <div className="divbtn">
          <button className="btn" onClick={handleClick}>
            Submit
          </button>
        </div>
        <div class="gridcontainer">
          <label>
            Low Value
            <input
              className="inp"
              type="number"
              value={lowValue}
              onChange={handleChangeL}
            />
          </label>
          <label>
            High Value
            <input
              className="inp"
              type="number"
              value={highValue}
              onChange={handleChangeH}
            />
          </label>
        </div>
        <div className="divbtn">
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Gamer;
