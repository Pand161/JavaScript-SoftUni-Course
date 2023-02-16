function solution(input){
    let n = Number(input[0]);
    let points = Number(input[1]);
    let wonTournaments = 0;
    for(let i = 0; i < n; i++){
        const place = input[i+2];
        if(place == `W`){
            points += 2000
            wonTournaments++;
        }else if(place == `F`){
            points += 1200;
        }else{
            points += 720;
        }
    }
    let max = points - Number(input[1]);
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${(Math.floor(max/n))}`);
    console.log(`${((wonTournaments/n)*100).toFixed(2)}%`)
}
solution(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])