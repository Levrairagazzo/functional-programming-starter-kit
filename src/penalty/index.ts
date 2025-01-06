import "./type.ts"
import type { Score } from "./type.ts";

const shootPenalty = (): number => {
    // Simulate a penalty shot result (0 or 1)
    return Math.floor(Math.random() * 2);
};

const penaltyShoutOut = (currentScore: Score) => {
    if (hasWinner(currentScore)) 
        return;

    let lastShot = shootPenalty();
    if (currentScore["Team A"].length <= currentScore["Team B"].length) {
        const updatedScore = {
            ...currentScore,
            "Team A": [...currentScore["Team A"], lastShot]
        };
        console.log(updatedScore);
        return penaltyShoutOut(updatedScore);
    } else {
        const updatedScore = {
            ...currentScore,
            "Team B": [...currentScore["Team B"], lastShot]
        };
        console.log(updatedScore);
        return penaltyShoutOut(updatedScore);
    }
};

const hasWinner = (currentScore: Score) => {
    if (currentScore["Team A"].length < 5 && currentScore["Team B"].length < 5){
        return false;
    }

    const sumA = currentScore["Team A"].reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const sumB = currentScore["Team B"].reduce((accumulator,currentValue)=> {
        return accumulator + currentValue;
    }, 0);

    if (sumA > sumB){
        console.log("We have a winner !! Congratulations team A")
        return true;
    }else{
        console.log("We have a winner !! Congratulations team A")
        return true;    
    }
}

const initialScore: Score = {
    "Team A": [],
    "Team B": []
};

penaltyShoutOut(initialScore);