function argumentInfo(...info) {
  let obj = {};

  info.forEach((el) => {
    if (!obj.hasOwnProperty(typeof el)) {
      obj[typeof el] = 1;
    } else {
      obj[typeof el]++;
    }

    console.log(`${typeof el}: ${el}`);
  });

  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([type, number]) => console.log(`${type} = ${number}`));
}

argumentInfo({ name: 'bob' }, 3.333, 9.999);
argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
