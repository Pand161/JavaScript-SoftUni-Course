function solution(number) {
    let base = "The number is divisible by"
    if(number % 10 == 0){
        console.log(`${base} 10`)
    }else if(number % 7 == 0){
        console.log(`${base} 7`)
    }else if(number % 6 == 0){
        console.log(`${base} 6`)
    }else if(number % 3 == 0){
        console.log(`${base} 3`)
    }else if(number % 2 == 0){
        console.log(`${base} 2`)
    }else{
        console.log('Not divisible')
    }
}
solution(15)