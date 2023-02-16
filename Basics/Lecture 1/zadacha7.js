function solve (input){

    let chicken = Number(input[0])*10.35;
    let  fish = Number(input[1])*12.40;
    let vegan = Number(input[2])*8.15;
    desert = (chicken + fish + vegan)*0.20;
    let sum = chicken + fish + vegan + desert + 2.50;
    console.log(sum);
}