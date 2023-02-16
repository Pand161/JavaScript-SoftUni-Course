function solution(input){
    let vacation = Number(input[0]);
    let money = Number(input[1]);
    let days = 0;
    let j = 0;
    let i = 2;
    let n = 3;
    while(j < 5 && money < vacation){
        if(input[i] == `spend`){
            money -= Number(input[n])
            if(money < 0){
                money = 0;
            }
            j++
            days++
        }else{
            money += Number(input[n]);
            days++
            j = 0;
        }
        n +=2;
        i +=2;
    }
    if(j >= 5){
        console.log(`You can't save the money.`)
        console.log(`${days}`)
    }else{
        console.log(`You saved the money for ${days} days.`)
    }
}
solution(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"])