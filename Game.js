export class Game {
    constructor() {
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
    }
    checkAnswer(input,word){
        if (input === word) {
            this.score++;
            this.combo++;
            if(this.combo > this.maxCombo){
                this.maxCombo = this.combo;
            }
            return true;
        }else{
            this.combo = 0;
            return false;
        }
    }
    getScore(){
        return this.score;
    }

    getRank(){
        if(this.score === 10){
            return "S";
        }else if(this.score >= 8){
            return "A";
        }else if(this.score >=6 ){
            return "B";
        }else if(this.score >= 4){
            return "C";
        }else{
            return "D";
        }
    }

    getMaxCombo(){
        return this.maxCombo;
    }

    reset(){
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
    } 
}