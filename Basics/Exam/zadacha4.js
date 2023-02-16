function solution(input) {
    let n = Number(input[0])
    let m = Number(input[1])
    let s = Number(input[2])
    let results = ""

    for (let i = m; i >= n; i--) {
        if (i == s && s % 2 == 0 && s % 3 == 0) {
            break;
        }
        if (i % 2 == 0) {
            if (i % 3 == 0) {
                results += i + " ";
            }
        }
    }
    console.log(results)
}
solution(["1",
"36",
"12"])




