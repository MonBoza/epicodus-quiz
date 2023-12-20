import React from "react";
import ReusableForm from "./reusableQuizForm";
import PropTypes from "prop-types";

function EditQuiz(props) {
  const { quiz } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz({
      names: event.target.names.value,
      id: quiz.id,
      question1: event.target.question1.value,
      A1: event.target.A1.value,
      B1: event.target.B1.value,
      C1: event.target.C1.value,
      D1: event.target.D1.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText= "Update Quiz" />
    </React.Fragment>
  );
}

EditQuiz.propTypes = {
  onEditQuiz: PropTypes.func,
  quiz: PropTypes.object

};



export default EditQuiz;