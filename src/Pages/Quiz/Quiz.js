import React, { useEffect, useState } from "react";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        console.log(questions);
        setOptions(questions && handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers
        ]))
    }, [questions])
    const handleShuffle = (optionss) =>{
        return optionss.sort(()=> Math.random() - 0.5);
    }
    console.log(options)
  return (
    <div>
        <span className="subtitle">Welcome, {name}</span>
    </div>
  );
}

export default Quiz;
