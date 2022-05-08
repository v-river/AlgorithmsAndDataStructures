const binarySearch = (sortedList, item) => {
  let left = 0;
  let right = sortedList.length - 1;
  let middle;
  let guess;

  while (left <= right) {
    middle = Math.trunc((left + right) / 2);
    guess = sortedList[middle];

    if (guess === item) return middle;

    if (guess < item) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};

export { binarySearch };
