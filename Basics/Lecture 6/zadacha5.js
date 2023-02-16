function solution(input) {
    let money = Number(input[0]);
    let n = 0;
    while (money > 0) {
        if (money - 2 >= 0) {
            money -= 2;
        } else if (money - 1 >= 0) {
            money -= 1;
        } else if (money - 0.50 >= 0) {
            money -= 0.50;
        } else if (money - 0.20 >= 0) {
            money -= 0.20;
        } else if (money - 0.10 >= 0) {
            money -= 0.10;
        } else if (money - 0.05 >= 0) {
            money -= 0.05;
        } else if (money - 0.02 >= 0) {
            money -= 0.02;
        } else if (money - 0.01 >= 0) {
            money -= 0.01;
        } 
        n++;
        money = Number(money.toFixed(2))
    }
    console.log(n);
}
solution(["1.23"])