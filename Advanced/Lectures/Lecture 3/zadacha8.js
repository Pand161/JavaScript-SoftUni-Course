function rectangle(width, height, color) {
  color = color[0].toUpperCase() + color.slice(1);

  let obj = {
    width: width,
    height: height,
    color: color,
    calcArea: function () {
      return width * height;
    },
  };

  return obj;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
