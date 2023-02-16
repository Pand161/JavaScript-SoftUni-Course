function solution(input){
    let strawber = Number(input[0]);
    let malini = (strawber/2)
    let malinikg = malini*Number(input[3]);
    let oranges = (malini - (malini*0.4))
    let orangeskg = oranges*Number(input[2])
    let banans = malini - malini*0.8
    let bananskg = banans * Number(input[1])
    let strawberries = strawber*Number(input[4]);
    let sum = malinikg + orangeskg + bananskg + strawberries;
    
    console.log(sum.toFixed(2))
}
solution([48,

    10,
    
    3.3,
    
    6.5,
    
    1.7])