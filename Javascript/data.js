const quizs = [
  {
    quiz: "I never dreamed about success, I worked for it",
    answer: "Estee Lauder",
  },
  {
    quiz: "Do not try to be original, just try to be good.",
    answer: "Paul Rand",
  },
  {
    quiz: "Do not be afraid to give up the good to go for the great",
    answer: "John D. Rockefeller",
  },
  {
    quiz: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    answer: "Martin Luther King Jr.",
  },
  {
    quiz: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    answer: "Thomas Edison",
  },
  {
    quiz: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    answer: "REid Hoffman",
  },
  {
    quiz: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    answer: "Tim O Reilly",
  },
  {
    quiz: "Some people dream of success, while other people get up every morning and make it happen",
    answer: "Wayne Huizenga",
  },
  {
    quiz: "The only thing worse than starting something and falling.. is not starting something",
    answer: "SEth Godin",
  },
  {
    quiz: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    answer: "Jim Rohn",
  },
];

const quiz = document.querySelector("#quiz span:first-child");
const answer = document.querySelector("#quiz input:last-child");
const todaysQuiz = quizs[Math.floor(Math.random() * quizs.length)];

quiz.innerText = todaysQuiz.quiz;
answer.innerText = `- ${todaysQuiz.answer}`;
/* login.js로 넘겨준 quizs 데이터가  
html input에 어떤 value로 저장되어 있는지
console.log()로 확인필요함 */
