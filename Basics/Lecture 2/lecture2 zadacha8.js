function solve(input){
    let str = input[0];
    let episode = Number(input[1]);
    let pochivka = Number(input[2]);
    let lunch = pochivka/8;
    let otdih = pochivka/4;
    let ostanaloVreme = pochivka -(lunch + otdih);
    if(ostanaloVreme >= episode){
        let freeTime = ostanaloVreme - episode;
        console.log(`You have enough time to watch ${str} and left with ${Math.ceil(freeTime)} minutes free time.`)
    }else {
        let needed = episode - ostanaloVreme;
        console.log(`You don't have enough time to watch ${str}, you need ${Math.ceil(needed)} more minutes.`)
    }
}
solve(["Game of Thrones",

"60",

"96"])