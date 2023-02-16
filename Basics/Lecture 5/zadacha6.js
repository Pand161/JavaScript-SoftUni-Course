function solution(input){
    let actor = input[0];
    let academy = Number(input[1]);
    let n = Number(input[2]);
    let text = 0;
    for(let i = 3; i <= n*2+2 && academy <= 1250.5; i++){
        if(i%2!=0){
            text = input[i].length;
        }else{
            academy += (text*(Number(input[i])))/2;
        }
    }
    if(academy > 1250.5){
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${academy.toFixed(1)}!`)
    }else{
        console.log(`Sorry, ${actor} you need ${(1250.5-academy).toFixed(1)} more!`)
    }
}
solution(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])