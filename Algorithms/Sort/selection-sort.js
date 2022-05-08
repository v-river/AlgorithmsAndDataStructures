const selectionSort = (list) => {
  let minIndex;
  let tmp;

  for (let i = 0; i < list.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    tmp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = tmp;
  }
};

const selectionSortV2 = (list) => {
  const sortedList = [];
  const size = list.length;
  let minIndex;

  for (let i = 0; i < size; i++) {
    minIndex = 0;

    for (let j = 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    sortedList.push(...list.splice(minIndex, 1));
  }

  return sortedList;
};

export { selectionSort, selectionSortV2 };
