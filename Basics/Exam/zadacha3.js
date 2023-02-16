function solution(input) {
    let breed = input[0]
    let gender = input[1]

    switch (breed) {
        case `British Shorthair`:if(gender == `m`){
            console.log(`${Math.floor((13*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((14*12)/6)} cat months`)
        }
            break;
        case `Siamese`:if(gender == `m`){
            console.log(`${Math.floor((15*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((16*12)/6)} cat months`)
        }
            break;
        case `Persian`:if(gender == `m`){
            console.log(`${Math.floor((14*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((15*12)/6)} cat months`)
        }
            break;
        case `Ragdoll`:if(gender == `m`){
            console.log(`${Math.floor((16*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((17*12)/6)} cat months`)
        }
            break;
        case `American Shorthair`:if(gender == `m`){
            console.log(`${Math.floor((12*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((13*12)/6)} cat months`)
        }
            break;
        case `Siberian`:if(gender == `m`){
            console.log(`${Math.floor((11*12)/6)} cat months`)
        }else{
            console.log(`${Math.floor((12*12)/6)} cat months`)
        }
            break;
            default:console.log(`${breed} is invalid cat!`)
    }
}
solution(["Siamese",
    "f"
    
    ])