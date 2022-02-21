import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home name={name} setName={setName} setQuestions={setQuestions} />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={<Result name={name} score={score} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
