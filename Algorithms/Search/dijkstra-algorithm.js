// Not implementation, just research

/*
start - A - final
      \ |  /
       \| /
        B
*/
const graph = new Map();

graph.set(
  "start",
  new Map([
    ["a", 6],
    ["b", 2],
  ])
);
graph.set("a", new Map([["final", 1]]));
graph.set(
  "b",
  new Map([
    ["a", 3],
    ["final", 5],
  ])
);
graph.set("final", new Map());

const costs = new Map();

costs.set("a", 6);
costs.set("b", 2);
costs.set("final", Infinity);

const parents = new Map();

parents.set("a", "start");
parents.set("b", "start");
parents.set("final", null);

const processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const key of costs.keys()) {
    const cost = costs.get(key);

    if (cost < lowestCost && !processed.includes(key)) {
      lowestCost = cost;
      lowestCostNode = key;
    }
  }

  return lowestCostNode;
};

const dijkstraSearch = () => {
  let key = findLowestCostNode(costs);

  while (key) {
    const cost = costs.get(key);
    const neighbors = graph.get(key);

    for (const k of neighbors.keys()) {
      const newCost = cost + neighbors.get(k);

      if (costs.get(k) > newCost) {
        costs.set(k, newCost);
        parents.set(k, key);
      }
    }

    processed.push(key);
    key = findLowestCostNode(costs);
  }
};

dijkstraSearch();

console.log(graph);
console.log(costs);
console.log(parents);
