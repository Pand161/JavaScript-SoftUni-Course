function solution(input){
    badGrades = Number(input[0]);
    let n = 1;
    let m = 2;
    let i = 0;
    let j = 0;
    let average = 0;
    while(badGrades > j && input[n] != `Enough`){
        if(Number(input[m]) <= 4){
            j++;
            i++;
            average += Number(input[m]);
        }else{
            average += Number(input[m]);
            i++;
        }
        m += 2;
        n += 2;
    }
    if(input[n] == `Enough`){
        console.log(`Average score: ${(average/i).toFixed(2)}`)
        console.log(`Number of problems: ${i}`);
        console.log(`Last problem: ${input[n-2]}`)
    }else{
        console.log(`You need a break, ${j} poor grades.`)
    }
}
solution(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])