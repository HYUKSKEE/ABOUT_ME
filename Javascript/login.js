const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const mainDiv = document.getElementById("main");
const logOut = document.querySelector(".logout");
/* console.log(answerListArray); */
const todayAnswersIndex = todaysQuiz.answer;
const todayQuizIndex = todaysQuiz.quiz;
const solvedArray = { todayQuizIndex: todayAnswersIndex };
const SOLVED_KEY = "solved";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const inputAnswer = loginInput.value;
  if (
    answerListArray.indexOf(inputAnswer) !=
    quizListArray.indexOf(todayQuizIndex)
  ) {
    event.preventDefault();
    alert("암호가 틀리다!");
  } else {
    event.preventDefault();
    localStorage.setItem(SOLVED_KEY, solvedArray);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainDiv.classList.remove(HIDDEN_CLASSNAME);
  }
}
const savedAnswer = localStorage.getItem(SOLVED_KEY);
if (savedAnswer === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} /* if (savedAnswer == answers)  */ else {
  // show the greeting
  loginForm.classList.add(HIDDEN_CLASSNAME);
  mainDiv.classList.remove(HIDDEN_CLASSNAME);
}

logOut.addEventListener("click", deleteSolvedStorage);

function deleteSolvedStorage() {
  localStorage.removeItem(SOLVED_KEY);
  window.location.reload();
}

/* function paintGreetings() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  goToLink.classList.remove(HIDDEN_CLASSNAME);
} */
/* loginInput.addEventListener("keypress", (e) => {
  const userInfo = e.target.value;
  console.log(e.key);
  console.log(userInfo);
}); */

/* loginForm.addEventListener("submit", onLoginSubmit); */
