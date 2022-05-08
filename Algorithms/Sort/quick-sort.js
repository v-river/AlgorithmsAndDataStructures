const quickSort = (list, lowIndex, highIndex) => {
  if (lowIndex >= highIndex || lowIndex < 0) {
    return;
  }

  const pivot = list[highIndex];
  let tmpPivotIndex = lowIndex - 1;
  let tmp;

  for (let i = lowIndex; i <= highIndex - 1; i++) {
    if (list[i] <= pivot) {
      tmpPivotIndex++;
      tmp = list[i];
      list[i] = list[tmpPivotIndex];
      list[tmpPivotIndex] = tmp;
    }
  }

  tmpPivotIndex++;
  list[highIndex] = list[tmpPivotIndex];
  list[tmpPivotIndex] = pivot;

  quickSort(list, lowIndex, tmpPivotIndex - 1);
  quickSort(list, tmpPivotIndex + 1, highIndex);
};

const quickSortV2 = (list) => {
  if (list.length < 2) {
    return [...list];
  }

  const pivot = list[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < list.length; i++) {
    if (list[i] <= pivot) {
      less.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }

  return quickSortV2(less).concat(pivot).concat(quickSortV2(greater));
};

export { quickSort, quickSortV2 };
