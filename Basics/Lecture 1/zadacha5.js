function solve(input){
    let pencil = Number(input[0])*5.80;
    let markers = Number(input[1])*7.20;
    let preparat = Number(input[2])*1.20;
    let percent = Number(input[3])/100;
    let sum = pencil + markers + preparat - ((pencil + markers + preparat)*percent);
    console.log(sum);
}