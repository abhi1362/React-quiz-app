import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Questions/Question";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if(questions){
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }
    else{
      navigate('/');
    }
  }, [questions,currQues,navigate]);
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>

          <Question
            questions={questions}
            currQues={currQues}
            setCurrQues={setCurrQues}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Quiz;
