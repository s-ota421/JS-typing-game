export class Question{
    constructor(){
        this.words = [
            "cat",
            "book",
            "java",
            "dog",
            "ice",
            "fish",
            "blue",
            "tree",
            "milk",
            "game",
            "apple",
            "banana",
            "school",
            "orange",
            "window",
            "flower",
            "summer",
            "friend",
            "coffee",
            "planet",
            "keyboard",
            "computer",
            "program",
            "internet",
            "example",
            "developer",
            "language",
            "practice",
            "question",
            "software",
            "algorithm",
            "framework"
        ];
        this.used = new Array(this.words.length).fill(false);
     }
     difficulty(word){
        if (word.length <= 4) {
            return "Easy";
        }else if (word.length <= 7){
            return "Normal";
        }else{
            return "Hard";
        }
     }
     getQuestion(level){
        let candidates = [];
        for(let i = 0; i < this.words.length; i++){
            if(
                this.difficulty(this.words[i]) === level && !this.used[i]
            ){
                candidates.push(i);
            }
        }
        if(candidates.length === 0){
            throw new Error("問題がありません");
        }
        let randomIndex = Math.floor(
            Math.random()*candidates.length
        );
        let index = candidates[randomIndex];
        this.used[index] = true;
        return this.words[index];
     }
    reset(){
        this.used = new Array(this.words.length).fill(false);
    }
     
}