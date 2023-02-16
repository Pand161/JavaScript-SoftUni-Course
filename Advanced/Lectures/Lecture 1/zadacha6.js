function roadRadar(num, area) {
  let speed = Number(num);
  let speedLimit = 0;
  let status;

  switch (area) {
    case 'motorway':
      speedLimit = 130;
      break;
    case 'interstate':
      speedLimit = 90;
      break;
    case 'city':
      speedLimit = 50;
      break;
    case 'residential':
      speedLimit = 20;
  }

  if (speed - speedLimit <= 20) {
    status = 'speeding';
  } else if (speed - speedLimit <= 40) {
    status = 'excessive speeding';
  } else if (speed - speedLimit > 40) {
    status = 'reckless driving';
  }

  if (speed > speedLimit) {
    console.log(
      `The speed is ${
        speed - speedLimit
      } km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
