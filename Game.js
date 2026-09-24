export class Game {
    constructor() {
        this.score = 0;
    }
    checkAnswer(input,word){
        if (input === word) {
            this.score++;
            return true;
        }else{
            return false;
        }
    }
    getScore(){
        return this.score;
    }
    showResult(){
        switch(this.score){
            case 10:
                return "完璧！";     
            case 8:
            case 9:
                return "惜しい！";
            case 6:
            case 7:
                return "いい感じ！"; 
            case 4:
            case 5:
                return "頑張ろう！";
            default:
                return "残念！";                   
        }
    }
}