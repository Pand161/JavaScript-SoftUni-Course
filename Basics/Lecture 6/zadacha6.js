function solution(input) {
    let cake = Number(input[0]) * Number(input[1])
    let i = 2;
    while(cake > 0 && input[i] != `STOP`){
        cake -= Number(input[i]);
        i++
    }
    if(cake > 0){
        console.log(`${cake} pieces are left.`)
    }else{
        console.log(`No more cake left! You need ${cake*-1} pieces more.`)
    }
}
solution(["10",

"10",

"20",

"20","20", "20", "21"])