function solution(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    number = first
    let firstNumber = Math.floor(first / 1000)
    let secondFirstnumber = Math.floor(second / 1000)
    let secondNumber = Math.floor(first / 100) - firstNumber
    let secondSecondnumber = Math.floor(second / 100) - secondFirstnumber
    let thirdNumber = Math.floor(first / 10) - secondNumber
    let secondThirdnumber = Math.floor(second / 10) - secondSecondnumber
    let fourthNumber = Math.floor(first / 1) - thirdNumber
    let secondFourthnumber = Math.floor(second / 1) - secondThirdnumber

    while (number < second) {
        if (firstNumber <= number && secondFirstnumber >= number) {
            if (secondNumber <= number && secondSecondnumber >= number) {
                if (thirdNumber <= number && secondThirdnumber >= number) {
                    if (fourthNumber <= number && secondFourthnumber >= number){
                        if (Math.floor(number / 1000) % 2 != 0) {
                            if (Math.floor(number / 100) % 2 != 0) {
                                if (Math.floor(number / 10) % 2 != 0) {
                                    if (number % 2 != 0) {
                                        console.log(number)
                                    }
                                }
                            }
                        }
                }
            }
        }
    }   
    console.log(number)
        number++
    }
    if (Math.floor(second / 1000) % 2 != 0) {
        if (Math.floor(second / 100) % 2 != 0) {
            if (Math.floor(second / 10) % 2 != 0) {
                if (second % 2 != 0) {
                    console.log(second)
                }
            }
        }
    }
}
solution([2345, 6789])