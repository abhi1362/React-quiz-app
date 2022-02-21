import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Questions.css";

const Question = ({
  questions,
  currQues,
  setCurrQues,
  options,
  correct,
  score,
  setScore
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (element) => {
    if (selected === element && selected === correct) {
      return "select";
    } else if (selected === element && selected !== correct) {
      return "wrong";
    } else if (element === correct) {
      return "select";
    } else return "";
  };
  const handleCheck = (element) => {
    setSelected(element);
    if (element === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () =>{
    if(currQues > 8){
        navigate('/result');
    }
    else if(selected){
        setCurrQues(currQues + 1)
        setSelected();
    }
    else{
        setError(true);
    }
  };

  const handleQuit = () =>{
    navigate('/');
  };
  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>Please Select an Option First</ErrorMessage>}
          {options &&
            options.map((ele) => (
              <button
                onClick={() => handleCheck(ele)}
                className={`singleOption ${selected && handleSelect(ele)}`}
                key={ele}
                disabled={selected}
              >
                {ele}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className='quit-button'
            // style={{ width: 185 }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className='next-button'
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
