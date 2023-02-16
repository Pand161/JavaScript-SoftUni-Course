function solution(input){
    let CPU = Number(input[0])
    let workers = Number(input[1])
    let days = Number(input[2])
    let processors = Math.floor((workers*8*days)/3)
    let CPUprice = CPU*110.10
    let processorsPrice = processors*110.10;

    if(processors >= CPU){
        console.log(`Profit: -> ${(processorsPrice-CPUprice).toFixed(2)} BGN`)
    }else{
        console.log(`Losses: -> ${(CPUprice-processorsPrice).toFixed(2)} BGN`)
    }
}
solution([150,
    7,
    18
    
    ])