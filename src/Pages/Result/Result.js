import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Result.css'

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
  const goToHome = () =>{
    navigate('/');
  }
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={goToHome}
      >Go To Homepage</Button>
    </div>
  );
};

export default Result;
