function solve(input){
    let year = Number(input[0]);
    let shoes = year*0.60;
    let ekip = shoes*0.80;
    let topka = ekip/4;
    let accessories = topka/5;
    sum = year + shoes + ekip + topka + accessories;
    console.log(sum);
}