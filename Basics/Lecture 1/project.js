function hello(input){
    let deposit= Number(input[0]);
    let srok = Number(input[1]);
    let percent = Number(input[2])/100;
    let sum = deposit + srok*((deposit*percent)/12);
console.log(sum);
}