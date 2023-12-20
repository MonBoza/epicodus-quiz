import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props) {
  const { quizList,  onClickingDelete, onClickingEdit } = props;
  console.log(quizList);

  return (
    <React.Fragment>
    {/* //   <div onClick={() => props.onWhenClicked(props.id)}> */}
      {quizList.map((quiz) => (
        <div key={quiz.id} >
          <h3>{quiz.name}</h3>
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
              <input type='radio' name={`question_${quiz.id}`} value={quiz.A3} />
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
            <button >Submit</button>
          </form>
          <button onClick={onClickingEdit}>Update Ticket</button>
      <button onClick={()=> onClickingDelete(quizList.id)}>Close Ticket</button>
        </div>
     
  ))}
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quizList: PropTypes.array,
  name: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onWhenClicked: PropTypes.func
};

export default QuizDetail;