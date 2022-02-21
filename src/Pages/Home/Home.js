import { Button, MenuItem, TextField, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({name, setName, setQuestions}) => {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      setName('')
    },[])
    
    const handleSubmit = () =>{
        if(!name || !category || !difficulty){
          setError(true);
          return;
        }
        else{
          setLoading(true);
          setError(false);
          fetchQuestions(category, difficulty);
        }
    }
    const fetchQuestions = async (category = "", difficulty = "") => {
      
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      setQuestions(await data.results);
      setLoading(false);
      navigate('/quiz');
    };

  return (
    <>
      {!loading ? (
        <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30 }}>Quiz Setting</span>
          <div className="settings__select">
              {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}
            <TextField
              margin="normal"
              error={false}
              label="Enter Your Name"
              variant="outlined"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <TextField
              select
              margin="normal"
              error={false}
              label="Select Category"
              variant="outlined"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
            >
              {Categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              margin="normal"
              error={false}
              label="Select Difficulty"
              variant="outlined"
              value={difficulty}
              onChange={(e)=> setDifficulty(e.target.value)}
            >
              <MenuItem key="easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button variant='contained' color='primary' margin="normal" size='large' style={{marginTop:25}} onClick={handleSubmit}>Start Quiz</Button>
          </div>
        </div>
        <img src="./quiz.svg" alt="quiz img" className="banner" />
      </div>
      ) : (
        <CircularProgress
          // style={{ margin: 100 }}
          className='loader'
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
      
    </>
  );
};

export default Home;
