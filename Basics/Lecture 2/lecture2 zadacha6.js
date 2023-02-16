function solve(input){
    let worldRecord = Number(input[0]);
    let length = Number(input[1]);
    let timeSeconds = Number(input[2]);
    let ivanchoTime = (length * timeSeconds)+(Math.floor(length/15)*12.5)

    if(ivanchoTime < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`)
    }else if(ivanchoTime >= worldRecord){
        let neededTime = ivanchoTime - worldRecord;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    }
}
solve(["10464",

"1500",

"20"])