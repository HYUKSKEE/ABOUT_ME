const quizs = [
  {
    quiz: "Q. [넌센스] 자동차를 톡 하고 치면?",
    answer: "카톡",
  },
  {
    quiz: "Q. [넌센스] 오래될수록 젊어 보이는 것은?",
    answer: "사진",
  },
  {
    quiz: "Q. [넌센스] 광부가 가장 많은 나라는?",
    answer: "케냐",
  },
  {
    quiz: "Q. [사자성어] 고생 끝에 낙이 온다.",
    answer: "고진감래",
  },
  {
    quiz: "Q. [사자성어] 많으면 많을수록 좋다.",
    answer: "다다익선",
  },
  {
    quiz: "Q. [사자성어] 까마귀 날자 배 떨어진다?(억울한 일을 당했을 때)",
    answer: "오비이락",
  },
  {
    quiz: "Q. [속담] 목구멍이 OOO",
    answer: "포도청",
  },
  {
    quiz: "Q. [속담] 어물전 망신은 OOO가 시킨다.",
    answer: "꼴뚜기",
  },
  {
    quiz: "Q. [속담] OO도 위아래가 있다.",
    answer: "찬물",
  },
  {
    quiz: '[코딩퀴즈] const a = "hi" 일때, console.log(`${a} HYUKSKEE`) 값을 적으시오.',
    answer: "hi HYUKSKEE",
  },
  {
    quiz: '[코딩퀴즈] const data = "123" 일때, console.log(typeof(data)) 값을 적으시오.',
    answer: "string",
  },
  {
    quiz: "[코딩퀴즈] const data = undefined 일때, console.log(typeof(data)) 값을 적으시오.",
    answer: "undefined",
  },
  {
    quiz: "[코딩퀴즈] const data = null 일때, console.log(typeof(data)) 값을 적으시오. ",
    answer: "object",
  },
];

const quiz = document.querySelector("#Qform span:first-child");
const answer = document.querySelector("#Qform input:last-child");
const todaysQuiz = quizs[Math.floor(Math.random() * quizs.length)];
/* console.log(JSON.stringify(quizs)); */
const setQuizs = JSON.stringify(quizs);
const getAnswer = JSON.parse(setQuizs);
localStorage.setItem("quizs", setQuizs);
const currentAnswer = localStorage.getItem("quizs");
const getCurrentAnswer = JSON.parse(currentAnswer);
const quizListArray = getCurrentAnswer.map((row) => row.quiz);
const answerListArray = getCurrentAnswer.map((row) => row.answer);
quiz.innerText = todaysQuiz.quiz; /*html에 그려줄 필요 없음*/
/* answer.innerText = `- ${todaysQuiz.answer}`; */
