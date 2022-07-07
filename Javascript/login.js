const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const mainDiv = document.getElementById("main");
const answers = todaysQuiz.answer;
const ANSWER_KEY = "answer";
const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
  const currentAnswer = loginInput.value;
  if (currentAnswer != answers) {
    event.preventDefault();
    alert("암호가 틀리다!");
  } else {
    event.preventDefault();
    localStorage.setItem(ANSWER_KEY, currentAnswer);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainDiv.classList.remove(HIDDEN_CLASSNAME);
  }
}
const savedAnswer = localStorage.getItem(ANSWER_KEY);
if (savedAnswer === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else if (savedAnswer == answers) {
  // show the greeting
  loginForm.classList.add(HIDDEN_CLASSNAME);
  mainDiv.classList.remove(HIDDEN_CLASSNAME);
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
