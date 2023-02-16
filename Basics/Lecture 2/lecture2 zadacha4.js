function solve(input) {
    let vacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let kamion = Number(input[5]);

    let pricePuzzle = puzzle * 2.60;
    let priceDoll = doll * 3;
    let priceBear = bear * 4.10;
    let priceMinion = minion * 8.20;
    let priceKamion = kamion * 2;

    let sum = puzzle + doll + bear + minion + kamion;
    let priceSum = pricePuzzle + priceDoll + priceBear + priceMinion + priceKamion;

    if (sum >= 50) {
        priceSum *= 0.75;
    }
    let naem = priceSum * 0.10;
    priceSum -= naem;
    if (priceSum >= vacation) {
        let leftMoney = priceSum - vacation;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
    } else{
        let neededMoney = vacation - priceSum;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }
}
solve(["320", "8", "2", "5", "5", "1"])