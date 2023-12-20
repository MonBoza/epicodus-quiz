import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./reusableQuizForm";

function NewQuiz(props) {
  
  function handleNewQuiz(event) {
    event.preventDefault();
    props.onNewQuizCreation({
      names: event.target.names.value,
      question1: event.target.question1,
      A1: event.target.A1.value,
      B1: event.target.B1.value,
      C1: event.target.C1.value,
      D1: event.target.D1.value,     
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleNewQuiz}
      buttonText='Add New Quiz' />
    </React.Fragment>
  );
}

NewQuiz.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuiz;