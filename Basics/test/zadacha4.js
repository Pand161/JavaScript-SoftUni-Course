function solution(input){
    let days = Number(input[0])
    let food = Number(input[1])
    let cat = 0
    let dog = 0
    let sum = 0;
    let biscuit = 0;
    let catfood = 0
    let dogfood = 0
    for(let i = 2; i < days*2 + 2; i+= 2){
        
        dogfood = Number(input[i])
        catfood = Number(input[i+1])
        
        cat += catfood;
        dog += dogfood;
        sum += catfood + dogfood;
        if(i%3==0){
            biscuit += (catfood + dogfood)*0.10
        }
    }
    console.log(`Total eaten biscuits: ${Math.round(biscuit)}gr.`)
    console.log(`${((sum/food)*100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((dog/sum)*100).toFixed(2)}% eaten from the dog.`)
    console.log(`${((cat/sum)*100).toFixed(2)}% eaten from the cat.`)
}
solution([3,

    1000,
    
    300,
    
    20,
    
    100,
    
    30,
    
    110,
    
    40])