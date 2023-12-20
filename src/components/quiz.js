import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  const { quizList } = props;
  console.log("quiz type:", typeof quizList);
  console.log("quiz: Value", quizList);

  const handleResult = (quiz) => {

    if (quiz.A1 === true && quiz.B2 === true && quiz.D3 === true) {
      return " Hufflepuff";
    } else
      return "Slytherin";
  }


  const onSubmit = () => {
    const result = handleResult(quizList[0]);
  };

  return (
    <React.Fragment>
      {quizList.map((quiz) => (
        <div key={quiz.id} >
          <h3>{quiz.question1}</h3>
          <form>
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.A1} />
              {quiz.A1}
            </label>
            < br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.B1} />
              {quiz.B1}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.C1} />
              {quiz.C1}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.D1} />
              {quiz.D1}
            </label>
            <br />
          </form>
          <h3>{quiz.question2}</h3>
          <form>
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.A2} />
              {quiz.A2}
            </label>
            < br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.B2} />
              {quiz.B2}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.C2} />
              {quiz.C2}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.D2} />
              {quiz.D2}
            </label>
            <br />

          </form>
          <h3>{quiz.question3}</h3>
          <form>
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.A2} />
              {quiz.A3}
            </label>
            < br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.B3} />
              {quiz.B3}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.C3} />
              {quiz.C3}
            </label>
            <br />
            <label>
              <input type='radio' name={`question_${quiz.id}`} value={quiz.D3} />
              {quiz.D3}
            </label>
            <br />
            <button onClick={() => onSubmit(handleResult)}>Submit</button>
          </form>
        </div>
      ))}
    </React.Fragment>
  );
}



Quiz.propTypes = {
  quizList: PropTypes.array,

};

export default Quiz;

