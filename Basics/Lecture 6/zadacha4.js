function solution(input){
    let i = 0;
    let steps = 0;
    while(steps < 10000 && input[i-2] != `Going home`){
        if(input[i] != `Going home`){
        steps += Number(input[i]);
        }
        i++;
    }
    if(steps >= 10000){
        console.log(`Goal reached! Good job!`)
        console.log(`${steps - 10000} steps over the goal!`)
    }else{
        console.log(`${10000 - steps} more steps to reach goal.`)
    }
}
solution(["1500", "300", "2500", "3000", "Going home", "200"])