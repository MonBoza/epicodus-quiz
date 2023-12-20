import React from "react";
import PropTypes from "prop-types";
import Quiz from './Quiz.js'




function QuizList(props) {

 return(
  <React.Fragment>
    {props.quizList.map((quiz) => (
      <Quiz
        key={quiz.id}
        id={quiz.id}
        name={quiz.name}
        question1={quiz.question1}
        A1={quiz.A1}
        B1={quiz.B1}
        C1={quiz.C1}
        D1={quiz.D1}
        question2={quiz.question2}
        A2={quiz.A2}
        B2={quiz.B2}
        C2={quiz.C2}
        D2={quiz.D2}
        question3={quiz.question3}
        A3={quiz.A3}
        B3={quiz.B3}
        C3={quiz.C3}
        D3={quiz.D3}
        whenQuizClicked={props.onQuizSelection}
      />
    ))}
  </React.Fragment>
 );
}
QuizList.propTypes = {
  quizList: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number,
  question1: PropTypes.string,
  A1: PropTypes.string, 
  B1: PropTypes.string,
  C1: PropTypes.string,
  D1: PropTypes.string,
  question2: PropTypes.string,
  A2: PropTypes.string,
  B2: PropTypes.string,
  C2: PropTypes.string,
  D2: PropTypes.string,
  question3: PropTypes.string,
  A3: PropTypes.string,
  B3: PropTypes.string,
  C3: PropTypes.string, 
  D3: PropTypes.string, 
  whenQuizClicked: PropTypes.func
};

export default QuizList;