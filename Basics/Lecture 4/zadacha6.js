function solution(input){
    let Num1 = Number(input[0]);
    let Num2 = Number(input[1]);
    let symbol = input[2];
    if(Num2 != 0){
    if (symbol == '+'){
        if((Num1 + Num2)%2 ==0){
        console.log(`${Num1} + ${Num2} = ${Num1 + Num2} - even`)
        }
        else{
        console.log(`${Num1} + ${Num2} = ${Num1 + Num2} - odd`)
        }
    }
    if (symbol == '-'){
        if((Num1 - Num2)%2 ==0){
        console.log(`${Num1} - ${Num2} = ${Num1 - Num2} - even`)
        }
        else{
        console.log(`${Num1} - ${Num2} = ${Num1 - Num2} - odd`)
        }
    }
    if (symbol == '*'){
        if((Num1 * Num2)%2 ==0){
        console.log(`${Num1} * ${Num2} = ${Num1 * Num2} - even`)
        }
        else{
        console.log(`${Num1} * ${Num2} = ${Num1 * Num2} - odd`)
        }
    }
    if (symbol == '/'){
            console.log(`${Num1} / ${Num2} = ${(Num1 / Num2).toFixed(2)}`)
    }
    if (symbol == '%'){
    console.log(`${Num1} % ${Num2} = ${Num1 % Num2}`)
    }
}else{
    console.log(`Cannot divide ${Num1} by zero`)
}
}
solution(["7",

"3",

"*"])