function solution(input){
    let years = Number(input[0]);
    let washing = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sum = 0;
    let money = 0;
    let toy = 0;
    for(let i = 1; i <= years; i++){
        if(i%2 == 0){
            money += 10;
            sum += money - 1;
        }else{
            toy++;
        }
    }
    toy *= toyPrice;
    sum += toy;
    if(sum >= washing){
        console.log(`Yes! ${(sum - washing).toFixed(2)}`)
    }else{
        console.log(`No! ${(washing - sum).toFixed(2)}`)
    }
}
solution(["10",

"170.00",

"6"])