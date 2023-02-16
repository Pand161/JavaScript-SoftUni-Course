function solve(input){
    let naylon = (Number(input[0])+2)*1.50;
    let boq = (Number(input[1])*1.10)*14.50;
    let razreditel = Number(input[2])*5;
    let chasove = Number(input[3]);
    const torbichki = 0.40;

    let sum = naylon + boq + razreditel + torbichki;
    let maystor = (sum*0.30)*chasove;
    let allSum = sum + maystor;

    console.log(allSum);
}