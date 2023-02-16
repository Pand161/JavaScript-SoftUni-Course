function solution(number, precision) {
    if(precision > 15){
        precision = 15;
    }
    let result = parseFloat(number.toFixed(precision))
    console.log(result);
}
solution(10.5,3)