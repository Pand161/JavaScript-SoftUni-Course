function solve(input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let videocardsPrice = videocards*250
    let processors = Number(input[2]);
    let processorsPrice = processors *(videocardsPrice*0.35);
    let ram = Number(input[3])*(videocardsPrice*0.10);
    let price = videocardsPrice + processorsPrice + ram;
    if(videocards > processors){
        price *= 0.85;
    }
    if(budget >= price){
        let leftOver = budget - price;
        console.log(`You have ${leftOver.toFixed(2)} leva left!`)
    }else{
      let needed = price - budget;
      console.log(`Not enough money! You need ${needed.toFixed(2)} leva more!`)  
    }
}
solve(["920.45",

"3",

"1",

"1"])