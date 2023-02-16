function solve(input){
    let duljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let visochina = Number(input[2]);
    let percent = Number(input[3])/100;

    sum = ((duljina*shirochina*visochina)*(1-percent))/1000;
    console.log(sum);
}