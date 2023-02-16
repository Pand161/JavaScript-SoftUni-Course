function solve(input){
    let number = Number(input[0]);
    let bonus = 0;

    if(number <= 100){
        bonus += 5;
    }
    else if(number > 100 && number < 1000){
        bonus = number*0.20;
    }
    else{
        bonus = number*0.10;
    }

    if(number%2 == 0){
        bonus += 1;
    }else if(number%5 == 0){
        bonus += 2;
    }

    number += bonus;

    console.log(bonus);
    console.log(number);
}
