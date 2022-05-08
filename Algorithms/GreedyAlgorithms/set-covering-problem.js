const intersection = (setA, setB) =>
  new Set([...setA].filter((item) => setB.has(item)));

const difference = (setA, setB) =>
  new Set([...setA].filter((item) => !setB.has(item)));

const toSet = (list) => new Set(list);

const toMapOfSets = (listOfArray) => {
  const map = new Map();

  for (let i = 0; i < listOfArray.length; i++) {
    map.set(i, new Set(listOfArray[i]));
  }

  return map;
};

const setCoveringProblem = (list, listOfArray) => {
  const subsets = toMapOfSets(listOfArray);
  const final = [];
  let initSet = toSet(list);

  while (initSet.size) {
    let optimalKey = null;
    let optimalSubset = new Set();

    for (const [key, subset] of subsets) {
      const covered = intersection(initSet, subset);

      if (covered.size > optimalSubset.size) {
        optimalKey = key;
        optimalSubset = covered;
      }
    }

    initSet = difference(initSet, optimalSubset);
    final.push([...subsets.get(optimalKey)]);
  }

  return final;
};

export { setCoveringProblem };
