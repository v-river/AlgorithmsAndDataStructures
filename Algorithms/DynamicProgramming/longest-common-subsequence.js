const buildTable = (a, b) => {
  const table = Array(a.length + 1);

  for (let i = 0; i < table.length; i++) {
    table[i] = Array(b.length + 1).fill(0);
  }

  return table;
};

const fillInTable = (table, a, b) => {
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }
};

const findSubsequence = (table, sequenceB) => {
  let longestSubsequence = "";
  let i = table.length - 1;
  let j = table[i].length - 1;

  while (i > 0 && j > 0) {
    if (table[i][j] === table[i][j - 1]) {
      j--;
    } else {
      longestSubsequence = sequenceB[j - 1] + longestSubsequence;
      i--;
      j--;
    }
  }

  return longestSubsequence;
};

const longestCommonSubsequence = (stringA, stringB) => {
  const table = buildTable(stringA, stringB);
  fillInTable(table, stringA, stringB);

  return findSubsequence(table, stringB);
};

export { longestCommonSubsequence };
