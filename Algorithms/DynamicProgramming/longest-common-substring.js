const buildTable = (a, b) => {
  const table = Array(a.length + 1);

  for (let i = 0; i < table.length; i++) {
    table[i] = Array(b.length + 1).fill(0);
  }

  return table;
};

const getIndexAndLength = (table, a, b) => {
  let longestLength = 0;
  let lastLongestIndex = 0;

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;

        if (longestLength < table[i][j]) {
          longestLength = table[i][j];
          lastLongestIndex = i;
        }
      }
    }
  }

  return { index: lastLongestIndex, length: longestLength };
};

const longestCommonSubstring = (stringA, stringB) => {
  const table = buildTable(stringA, stringB);
  const { index, length } = getIndexAndLength(table, stringA, stringB);

  return stringA.slice(index - length, index);
};

export { longestCommonSubstring };
