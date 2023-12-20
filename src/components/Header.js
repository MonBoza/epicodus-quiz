import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";



function Header(props) {
const { quizList, onDisplayQuiz}  = props;
  return (
    <React.Fragment>
      <h1>Epicodus Quiz</h1>
      <hr />
      <button>Add New Quiz</button>
      <button onClick={() => onDisplayQuiz(quizList)}>Take a quiz</button>
    
    </React.Fragment>
  );
}
Header.propTypes = {
  quizList: PropTypes.array,
  onNewQuizCreation: PropTypes.func,
  onDisplayQuiz: PropTypes.func
};
export default Header;