function solution(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let winner;
    let i = 2;
    while(winner != `End` && first != 0 && second != 0){
        winner = input[i]
        if(winner == `one`){
            second -= 1;
        }else if(winner == `two`){
            first -= 1;
        }
        i++
    }
    if(first == 0){
        console.log(`Player one is out of eggs. Player two has ${second} eggs left.`)
    }else if(second == 0){
        console.log(`Player two is out of eggs. Player one has ${first} eggs left.`)
    }else{
        console.log(`Player one has ${first} eggs left.`)
        console.log(`Player two has ${second} eggs left.`)
    }
}
solution([6,

    3,
    
    "one",
    
    "two",
    
    "two",
    
    "one",
    
    "one"])