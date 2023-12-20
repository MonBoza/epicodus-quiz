import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props){
  const { quiz, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Quiz Details</h1>
      <h3>{quiz.name}</h3>
      console.log(quiz);
      <button onClick={onClickingEdit}>Update Quiz</button>
      <button onClick={()=> onClickingDelete(quiz.id) }>Close Quiz</button>
      <hr/>
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  name: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;