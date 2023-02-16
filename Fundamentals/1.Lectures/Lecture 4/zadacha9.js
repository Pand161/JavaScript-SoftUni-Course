function loadingBar(percent) {
  let str = '';
  for (let i = 0; i < percent / 10; i++) {
    str += '%';
  }
  if (percent < 100) {
    for (let i = percent / 10; i < 10; i++) {
      str += '.';
    }
    console.log(`${percent}% [${str}]`);
    console.log('Still loading...');
  } else {
    console.log(`${percent}% Complete!`);
    console.log(`[${str}]`);
  }
}

loadingBar(0);
