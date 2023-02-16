function solve(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothes = Number(input[2]);
    let decor = budget*0.10;
    let clothesPrice = clothes * statists;

    if(statists > 150){
        clothesPrice *= 0.90;
    }
    let price = decor + clothesPrice;
    if(budget - price >= 0){
        let leftOver = budget - price;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftOver.toFixed(2)} leva left.`);
    }else {
        let needed = price - budget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`)
    }
}
solve(["9587.88",

"222",

"55.68"])