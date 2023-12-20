import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='names' placeholder='Quiz Name' />
        <br />
        <textarea
          type='text'
          name='names'
          placeholder='Question' />
        <br />
        <textarea
          name='A1'
          placeholder='First Answer' />
        <br />
        <textarea
          name='B1'
          placeholder='Second Answer' />
        <br />
        <textarea
          name='C1'
          placeholder='Third Answer' />
        <br />
        <textarea
          name='D1'
          placeholder='Fourth Answer' />
        <br />
        <button type='submit'>{props.buttonText}</button>
        <br />
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;


