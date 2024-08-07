import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    if (progressBar.current) {
        progressBar.current.classList.remove('active');
        void progressBar.current.offsetWidth;
        progressBar.current.classList.add('active');
      }
    
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [question]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {
            question.options.map((option,index)=>{
                return(
                    <div
                    className={index == selectedOption ? "option active":"option"}
                    key={index}
                    onClick={()=>setSelectedOption(index)}
                    >
                        {option}
                    </div>
                )
            })
          }
        </div>
        <div className="control">
          <button onClick={gotoNextQuestion}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
