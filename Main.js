import { Game } from "./Game.js";
import { Question } from "./Question.js"

//ゲーム進行
const game = new Game();
const question = new Question();

let currentQuestion = 0;
let currentWord = "";
let level = "";

const questionNumber = document.getElementById("question-number");
const wordDisplay = document.getElementById("question");
const input = document.getElementById("answer");
const message = document.getElementById("message");
const result = document.getElementById("result");
const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");

easyButton.addEventListener("click",function(){
    level = "Easy";
    startGame();
});
normalButton.addEventListener("click",function(){
    level = "Normal";
    startGame();
});
hardButton.addEventListener("click",function(){
    level = "Hard";
    startGame();
});

function startGame(){
    game.reset();
    question.reset();
    currentQuestion = 0;
    currentWord = "";
    questionNumber.textContent = "";
    wordDisplay.textContent = "";
    message.textContent="";
    result.textContent = "";
    input.disabled = false;
    input.value = "";
    startQuestion();
}

function startQuestion() {
    currentQuestion++;
    currentWord = question.getQuestion(level);

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
               `ゲーム終了！\n10問中${game.getScore()}問正解！\nランクは${game.getRank()}です！\n最大コンボ:${game.getMaxCombo()}`;
        input.disabled = true;
        return;
     }
     startQuestion();
})