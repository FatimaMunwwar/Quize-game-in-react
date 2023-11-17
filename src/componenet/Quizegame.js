import React, { useState } from "react";
import quizData from "./Data";
import Result from "./Result";
import "./Game.css";

const Quizegame = () => {
  let newquestion;
  const [nextquestion, setnextquestion] = useState(0);
  const [score, setscore] = useState(0);
  const [result, setresult] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleans(incorrect) {
    if (incorrect) {
      setscore(score + 1);
    }
  }
  function save() {
    if (selectedOption === null) {
      alert("Please select an option");
      return;
    }
    const newQuestion = nextquestion + 1;
    if (newQuestion < quizData.length) {
      setnextquestion(newQuestion);
      setSelectedOption(null);
    } else {
      setresult(true);
    }
  }

  function playagain() {
    setscore(0);
    setresult(false);
    setnextquestion(0);
  }
  return (
    <>
      <div className="bg-image d-flex  align-items-center justify-content-center">
        <>
          {result ? (
            <Result score={score} length={quizData.length} handle={playagain} />
          ) : (
            <div className="">
              <div className="width ps-3 py-3">
                <h1 className="text-center  py-2 box text-white">QUIZE GAME</h1>
                <div className="text-white">
                  <h3>Select the correct option</h3>
                </div>
                <h5 id="questions" className="postion">
                  {quizData[nextquestion].question}
                </h5>
                <div className="ps-3">
                  {quizData[nextquestion].answer.map((value, index) => {
                    return (
                      <div key={index}>
                        {" "}
                        <input
                          type="radio"
                          name="answer"
                          id="ans1"
                          className="answers"
                          onClick={() => {
                            handleans(value.incorrect);
                            setSelectedOption(index);
                          }}
                          checked={selectedOption === index}
                        />
                        <label className="answers" id="option1" for="answer1">
                          {value.answerText}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button
                    className="bg-danger px-4 py-2 text-white btn"
                    onClick={save}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Quizegame;
