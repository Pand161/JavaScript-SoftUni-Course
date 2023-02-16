function solution(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePer = Number(input[2]);
    let percent = Number(input[3])/100

    if(nights > 7){
        pricePer *= 0.95;
    }
    let realBudget = budget - (budget*percent)
    let price = nights*pricePer;
    if(realBudget >= price){
        console.log(`Ivanovi will be left with ${(realBudget-price).toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${(price-realBudget).toFixed(2)} leva needed.`)
    }
}
solution([500,

    7,
    
    66,
    
    15])