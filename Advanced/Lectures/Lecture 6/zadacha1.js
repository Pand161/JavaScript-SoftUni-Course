function sortArray(arr, type) {
  if (type == 'asc') {
    return arr.sort((a, b) => a - b);
  }
  return arr.sort((a, b) => b - a);
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');
