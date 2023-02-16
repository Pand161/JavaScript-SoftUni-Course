function solution(input) {
    let n = Number(input[0]);
    let condition1 = 0;
    let condition2 = 0;
    let condition3 = 0;
    let condition4 = 0;
    let condition5 = 0;


    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);

        if (num < 200) {
            condition1++;
        } else if (num >= 200 && num < 400) {
            condition2++;
        } else if (num >= 400 && num < 600) {
            condition3++;
        } else if (num >= 600 && num < 800) {
            condition4++;
        } else {
            condition5++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        console.log(`${((eval(`condition${i}`) / n) * 100).toFixed(2)}%`)
    }
    // console.log(`${((condition1/n)*100).toFixed(2)}%`)
    // console.log(`${((condition2/n)*100).toFixed(2)}%`)
    // console.log(`${((condition3/n)*100).toFixed(2)}%`)
    // console.log(`${(condition4/n).toFixed(2)}%`)
    // console.log(`${(condition5/n).toFixed(2)}%`)

}
solution(["7", "800", "801", "250", "199", "399", "599", "799"])