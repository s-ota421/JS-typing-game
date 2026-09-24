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
            "software"
        ];
        this.used = new Array(this.words.length).fill(false);
     }
     getQuestion(start,end){
        let index = Math.floor(Math.random()*(end - start)) + start;
        while (this.used[index]) {
            index = Math.floor(Math.random()*(end - start)) + start;
        }
        this.used[index] = true;
        return this.words[index];
     }
}