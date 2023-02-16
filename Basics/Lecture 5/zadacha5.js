function solution(input){
    let n = Number(input[0]);
    let salary = Number(input[1]);
    

    for(let i = 0; i <n; i++){
        const site = input[i+2];
        if(site == 'Facebook'){
            salary -=150;
        }else if(site == 'Instagram'){
            salary -= 100;
        }else if(site == 'Reddit'){
            salary -= 50;
        }
    }
    if(salary <=0){
        console.log("You have lost your salary.")
    }else{
        console.log(salary);
    }
}
solution(["4", "500", "Facebook", "Stackoverflow.com", "Facebook", "Facebook"])