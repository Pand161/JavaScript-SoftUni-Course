function solution(input) {
    let locations = Number(input[0])
    let averageExpected = Number(input[1])
    let days = Number(input[2])
    let currentDay = 3
    let goldAverage = 0
    for (let j = 0; j < locations; j++) {
        for (let i = 0; i < days; i++) {
            goldAverage += Number(input[currentDay])
            currentDay++
            
        }
        goldAverage = goldAverage/days
        if(goldAverage >= averageExpected){
            console.log(`Good job! Average gold per day: ${goldAverage.toFixed(2)}.`)
        }else{
            console.log(`You need ${(averageExpected-goldAverage).toFixed(2)} gold.`)
        }
        averageExpected = Number(input[currentDay])
        days = Number(input[currentDay+1])
        currentDay += 2
        goldAverage = 0
    }
}
solution(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])




