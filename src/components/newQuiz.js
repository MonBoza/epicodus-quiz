import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./reusableQuizForm";

function NewQuiz(props) {
  const { showNewQuizForm } = props;
  function handleNewQuiz(event) {
    event.preventDefault();
    props.onNewQuizCreation({
      question1: event.target.question1.value,
      A1: event.target.A1.value,
      B1: event.target.B1.value,
      C1: event.target.C1.value,
      D1: event.target.D1.value,
      question2: event.target.question2.value,
      A2: event.target.A2.value,
      B2: event.target.B2.value,
      C2: event.target.C2.value,
      D2: event.target.D2.value,
      question3: event.target.question3.value,
      A3: event.target.A3.value,
      B3: event.target.B3.value,
      C3: event.target.C3.value,
      D3: event.target.D3.value,      
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={showNewQuizForm}
      buttonText='Add New Quiz' />
    </React.Fragment>
  );
}

NewQuiz.propTypes = {
  showNewQuizForm: PropTypes.func
}

export default NewQuiz;