import React from "react";
import PropTypes from "prop-types";



function Header(props) {
  const { onQuizClick } = props;


  return (
    <React.Fragment>
      <h1>Epicodus Quiz</h1>
      <br />
      <button onClick={onQuizClick}>Take me to the Quiz</button>
      {/* <button direct to new Quiz form>Add NewQuiz</button> */}

    </React.Fragment>
  );
}

Header.propTypes = {


  onQuizClick: PropTypes.func.isRequired,
};

export default Header;