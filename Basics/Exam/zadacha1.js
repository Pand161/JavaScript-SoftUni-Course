function solution(input){
    let boxes = Number(input[0])*21.5
    let tapet = Number(input[1])*5.2
    let priceGloves = Number(input[2])
    let priceBrush = Number(input[3])

    let gloves = (Math.ceil(Number(input[1])*0.35))*priceGloves
    let brushes = (Math.floor(Number(input[0])*0.48))*priceBrush

    let sum = (boxes + tapet + gloves + brushes)/15
    console.log(`This delivery will cost ${sum.toFixed(2)} lv.`) 
}
solution([1,
    3,
    10.9,
    1
    ])