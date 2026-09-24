import { Game } from "./Game.js";
import { Question } from "./Question.js"

//ゲーム進行
const game = new Game();
const question = new Question();

let currentQuestion = 0;
let currentWord = "";
let start = 0;
let end = 0;

const questionNumber = document.getElementById("question-number");
const wordDisplay = document.getElementById("question");
const input = document.getElementById("answer");
const message = document.getElementById("message");
const result = document.getElementById("result");
const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");

easyButton.addEventListener("click",function(){
    start = 0;
    end = 10;
    startGame();
});
normalButton.addEventListener("click",function(){
    start = 10;
    end = 20;
    startGame();
});
hardButton.addEventListener("click",function(){
    start = 20;
    end = 30;
    startGame();
});

function startGame(){
    currentQuestion = 0;
    startQuestion();
}

function startQuestion() {
    currentQuestion++;
    currentWord = question.getQuestion(start, end);

    questionNumber.textContent = `第${currentQuestion}問`;
    wordDisplay.textContent = currentWord;
    
    input.value = "";
    input.focus();
}

input.addEventListener("keydown",function(event) {
    if (event.key !== "Enter"){
        return;
    }

    const answer = input.value;
    if(game.checkAnswer(answer,currentWord)){
        message.textContent = "OK!";
    }else{
        message.textContent = "NG!";
    }

    if(currentQuestion === 10){
        result.textContent = 
               `ゲーム終了！\n10問中${game.getScore()}問正解！\n${game.showResult()}`;
        input.disabled = true;
        return;
     }
     startQuestion();
})

