import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenQuizClicked(props.id)}>
        <h3>{props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  whenQuizClicked: PropTypes.func
}

export default Quiz;


// function Quiz(props) {
//   const { quizList } = props;
//   const [userAnswers, setUserAnswers] = useState({});

//   const handleResult = () => {
//     if (userAnswers.A1 && userAnswers.B2 && userAnswers.D3) {
//       return "Hufflepuff";
//     } else {
//       return "Slytherin";
//     }
//   };

//   const onSubmit = () => {
//     const result = handleResult();
//     console.log("Result:", result);
//   };

//   const handleRadioChange = (questionId, optionValue) => {
//     setUserAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: optionValue,
//     }));
//   };

//   return (
//     <React.Fragment>
//       <form>
//         {quizList.map((quiz) => (
//           <div key={quiz.id}>
//             <h3>{quiz.question1}</h3>
//             {['A1', 'B1', 'C1', 'D1'].map((option) => (
//               <React.Fragment key={option}>
//                 <label>
//                   <input
//                     type='radio'
//                     name={`question_${quiz.id}`}
//                     value={option}
//                     checked={userAnswers[quiz.id] === option}
//                     onChange={() => handleRadioChange(quiz.id, option)}
//                   />
//                   {quiz[option]}
//                 </label>
//                 <br />
//               </React.Fragment>
//             ))}

//             <h3>{quiz.question2}</h3>
//             {['A2', 'B2', 'C2', 'D2'].map((option) => (
//               <React.Fragment key={option}>
//                 <label>
//                   <input
//                     type='radio'
//                     name={`question_${quiz.id}`}
//                     value={option}
//                     checked={userAnswers[quiz.id] === option}
//                     onChange={() => handleRadioChange(quiz.id, option)}
//                   />
//                   {quiz[option]}
//                 </label>
//                 <br />
//               </React.Fragment>
//             ))}

//             <h3>{quiz.question3}</h3>
//             {['A3', 'B3', 'C3', 'D3'].map((option) => (
//               <React.Fragment key={option}>
//                 <label>
//                   <input
//                     type='radio'
//                     name={`question_${quiz.id}`}
//                     value={option}
//                     checked={userAnswers[quiz.id] === option}
//                     onChange={() => handleRadioChange(quiz.id, option)}
//                   />
//                   {quiz[option]}
//                 </label>
//                 <br />
//               </React.Fragment>
//             ))}
//           </div>
//         ))}
//         <button type="button" onClick={onSubmit}>
//           Submit
//         </button>
//       </form>
//     </React.Fragment>
//   );
// }

// Quiz.propTypes = {
//   quizList: PropTypes.array,
// };

// export default Quiz;