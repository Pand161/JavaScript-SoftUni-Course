function solution(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourTime = Number(input[2]);
    let minuteTime = Number(input[3]);
    let fullExam = (hourExam * 60) + minuteExam;
    let fullTime = (hourTime * 60) + minuteTime;
    const timeDif = fullExam - fullTime
    if (fullExam < fullTime) {
        console.log(`Late`)
        if (minuteTime < minuteExam) {
            hourTime -= 1;
            minuteTime += 60;
        }
        if (hourExam == hourTime) {
                console.log(`${minuteTime - minuteExam} minutes after the start`)
        } else {
            if (minuteTime - minuteExam < 10) {
                console.log(`${hourTime - hourExam}:0${minuteTime - minuteExam} hours after the start`)
            } else {
                console.log(`${hourTime - hourExam}:${minuteTime - minuteExam} hours after the start`)
            }
        }
    } else if (fullExam - fullTime <= 30) {
        console.log(`On time`);
        if (minuteTime > minuteExam) {
            hourExam -= 1;
            minuteExam += 60;
        }
        if (fullExam - fullTime > 0) {
            console.log(`${minuteExam - minuteTime} minutes before the start`)
        }
    } else {
        console.log(`Early`);
        if (minuteExam < minuteTime) {
            hourExam -= 1;
            minuteExam += 60;
        }
        if (fullExam - fullTime < 60) {
            console.log(`${minuteExam - minuteTime} minutes before the start`)
        } else {
            if (minuteExam - minuteTime < 10) {
                console.log(`${hourExam - hourTime}:0${minuteExam - minuteTime} hours before the start`)
            } else {
                console.log(`${hourExam - hourTime}:${minuteExam - minuteTime} hours before the start`)
            }
        }
    }
}
solution(["11", "30", "12", "29"])