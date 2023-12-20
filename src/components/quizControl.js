import React from "react";
import { useState } from 'react';
import Quiz from "./quiz";
import Header from "./Header";
import NewQuiz from "./newQuiz";
import QuizList from "./quizList";

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


  

const handleClick = () => {
  if(selectedQuiz != null) {
    setFormVisibleOnPage(false);
    setSelectedQuiz(null);
} else {
  setFormVisibleOnPage(!formVisibleOnPage);
}
}

  const handleNewQuiz = (newQuiz) => {
    const newQuizList = quizData.concat(newQuiz);
    setQuiz(newQuizList);
    setFormVisibleOnPage(false);
  }
  const handleEditQuiz = (id) => {
    const editedQuiz = quizData.filter(quiz => quiz.id === id)[0];
    setQuiz(editedQuiz);

  }
  const handleShowQuizForm = () => {
    setFormVisibleOnPage(true);
  }
  const handleShowQuizData = () => {
    setFormVisibleOnPage(false);

  }

  const handleDeleteQuiz = (id) => {
    const newQuizList = quizData.filter(quiz => quiz.id !== id);
    setQuiz(newQuizList);
  }



  // handle adding new quiz
  // handle selecting a quiz.
  // handleResponses function after quiz is submitted
  // show Results function


  // deleting 
  let currentlyVisibleState = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewQuiz showNewQuizForm={handleNewQuiz} />;
  } else {
    currentlyVisibleState = <Quiz quizList={quiz} />;
  }

  return (
    <React.Fragment>
     <Header onQuizClick={handleShowQuizData} />
    {currentlyVisibleState}
    {!formVisibleOnPage && <Quiz quizList={quiz} />}
    <QuizList quizList={quiz} onQuizClick={handleClick} />
    {/* <NewQuiz showNewQuizForm={handleNewQuiz} /> */}
  </React.Fragment>
  );
}

export default QuizControl;
