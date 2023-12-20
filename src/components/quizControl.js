import React from "react";
import { useState } from 'react';
import NewQuiz from "./newQuiz";
import QuizList from "./quizList";
import EditQuiz from "./editQuiz";
import QuizDetail from "./quizDetail";
import Header from "./Header";
const quizData = [
  {
    name: 'Harry Potter House Quiz',
    id: 1,
    question1: "If you could have one of these wishes which would you choose?",
    A1: "world peace",
    B1: "Learn the secrets of the universe",
    C1: " Eradication of poverty",
    D1: "Rule the world",
    question2: "In a group project, which role would you take on?",
    A2: "The leader",
    B2: "The researcher",
    C2: "Team player",
    D2: "strategist",
    question3: "Which of these is your favorite color?",
    A3: "Red",
    B3: "Blue",
    C3: "Yellow",
    D3: "Green",
  },
  {
    name: 'Lord of the Rings Quiz',
    id: 2,
    question1: "If you could have one of these wishes which would you choose?",
    A1: "world peace",
    B1: "Learn the secrets of the universe",
    C1: " Eradication of poverty",
    D1: "Rule the world",
    question2: "In a group project, which role would you take on?",
    A2: "The leader",
    B2: "The researcher",
    C2: "Team player",
    D2: "strategist",
    question3: "Which of these is your favorite color?",
    A3: "Red",
    B3: "Blue",
    C3: "Yellow",
    D3: "Green",
  }

];

function QuizControl() {
  const [quiz, setQuiz] = useState(quizData);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [editedQuiz, setEditedQuiz] = useState(null);
  const [error, setError] = useState(null);





  const handleClick = () => {
    if (selectedQuiz != null) {
      setFormVisibleOnPage(false);
      setSelectedQuiz(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeleteQuiz = (id) => {
    const newQuizList = quizData.filter(quiz => quiz.id !== id);
    setQuiz(newQuizList);
    setSelectedQuiz(null);
  }
  const handleEditClick = () => {
    setEditedQuiz(true);
  }
  const handleEditingQuizInList = (quizToEdit) => {
    const editedNewQuiz = quizData.filter(quiz => quiz.id !== quizToEdit.id).concat(quizToEdit);
    setQuiz(editedNewQuiz);
    setEditedQuiz(false);
    setSelectedQuiz(null);  
  }
  

  const handleAddingNewQuizToList = (newQuiz) => {
    const newQuizList = quiz.concat(newQuiz);
    setQuiz(newQuizList);
    setFormVisibleOnPage(false);
  }
  const handleChangingSelectedQuiz = (id) => {
    const selectedQuiz = quizData.filter(quiz => quiz.id === id)[0];
    setSelectedQuiz(selectedQuiz);
  }
  const handleDisplayQuizes = () => {
    setQuiz(quizData);
    
    setFormVisibleOnPage(false);

  }

  let currentlyVisibleState = null;
  let buttonText = null;
  
  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editedQuiz) {
    currentlyVisibleState = <EditQuiz quiz={selectedQuiz} onEditQuiz={handleEditingQuizInList} />
    buttonText = "Return to Quiz List";
  } else if (selectedQuiz != null) {
    currentlyVisibleState = <QuizDetail quizList={quiz} onWhenClicked={selectedQuiz} onClickingEdit={handleEditClick} onWhenClickingDelete={handleDeleteQuiz} />
    buttonText = "Return to Quiz List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewQuiz onNewQuizCreation={handleAddingNewQuizToList} />
  } else {
    currentlyVisibleState = <QuizList quizList={quiz} onQuizSelection={handleChangingSelectedQuiz} />
    buttonText = "Add Quiz";
  }
  return (
    <React.Fragment>
     
     <Header onDisplayQuiz={handleDisplayQuizes} onNewQuiz={handleAddingNewQuizToList}/>
     {currentlyVisibleState}
    </React.Fragment>
  );
}

export default QuizControl;