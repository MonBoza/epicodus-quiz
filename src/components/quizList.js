import React from "react";
import Quiz from "./quiz";
import PropTypes from "prop-types";




function QuizList(props) {
  const { quizList, onQuizClick } = props;
  console.log("quizData type:", typeof quizList);
  console.log("quizData: Value", quizList);

  return (
    <React.Fragment>
      {quizList.forEach((quiz) => (
        <div key={quiz.id} >
          whenQuizClicked={onQuizClick}
          name={quiz.name}
          id={quiz.id}
          key={quiz.id}
          </div>
      ))}
    </React.Fragment>
  );

}

QuizList.propTypes = {
  quizList: PropTypes.array,
  onQuizClick: PropTypes.func
};

export default QuizList;