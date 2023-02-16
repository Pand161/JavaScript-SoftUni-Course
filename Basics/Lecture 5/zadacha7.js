function solution(input){
    let n = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    for(let i = 1; i <= n; i++){
        const group = Number(input[i]);
        if(group <=5 ){
            group1 += group;
        }else if(group <= 12){
            group2 += group;
        }else if(group <= 25){
            group3 += group;
        }else if(group <= 40){
            group4 += group;
        }else{
            group5 += group;
        }
    }
    let max = group1 + group2 + group3 + group4 + group5;
    for (let i = 1; i <= 5; i++) {
        console.log(`${((eval(`group${i}`) / max) * 100).toFixed(2)}%`)
    }
}
solution(["5",

"25",

"41",

"31",

"250",

"6"])