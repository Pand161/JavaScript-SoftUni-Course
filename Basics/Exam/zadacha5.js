function solution(input) {
    let text;
    let age;
    let kids = 0
    let adults = 0
    let toys = 0
    let sweaters = 0
    let i = 0
    while (text != `Christmas`) {
        text = input[i]
        if (text != `Christmas`) {
            age = Number(input[i])
            if (age <= 16) {
                kids++
                toys += 5
            } else {
                adults++
                sweaters += 15
            }
        }
        i++
    }
    console.log(`Number of adults: ${adults}`)
    console.log(`Number of kids: ${kids}`)
    console.log(`Money for toys: ${toys}`)
    console.log(`Money for sweaters: ${sweaters}`)
}
solution(["16",
"16",
"16",
"16",
"16",
"Christmas"])

