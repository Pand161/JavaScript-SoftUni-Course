function timeToWalk(steps, lengthOfSteps, studentSpeed) {
  let lengthToUni = steps * lengthOfSteps;
  let studentSpeed2 = studentSpeed / 3.6;
  let rest = Math.floor(lengthToUni / 500) * 60;
  let time = lengthToUni / studentSpeed2 + rest;
  let seconds = (time % 60).toFixed(0);
  let minutes = Math.floor(time / 60);
  let hours = Math.floor(time / 3600);

  console.log(
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
