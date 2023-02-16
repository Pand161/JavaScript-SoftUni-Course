function solution(input) {
    let space = Number(input[0]) * Number(input[1]) *Number(input[2])
    let n = 3;

    while(space > 0 && input[n] != `Done`){
        space -= Number(input[n]);
        n++
    }
    if(space > 0){
        console.log(`${space} Cubic meters left.`)
    }else{
        console.log(`No more free space! You need ${space*-1} Cubic meters more.`)
    }
}
solution(["10",

"10",

"2","20", "20", "20", "20", "122"])