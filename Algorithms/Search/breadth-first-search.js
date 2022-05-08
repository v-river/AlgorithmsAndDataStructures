// Not implementation, just research
const graph = new Map();

graph.set("you", ["alice", "bob", "claire"]);
graph.set("alice", ["peggy"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("peggy", []);
graph.set("anuj", []);
graph.set("thom", []);
graph.set("jonny", []);

const nameWithLength = (length) => (name) => name.length === length;
const is4 = nameWithLength(4);

const breadthFirstSearch = (name) => {
  const searchQueue = [];
  const searched = [];

  searchQueue.push(...graph.get(name));

  while (searchQueue.length) {
    const guess = searchQueue.shift();

    if (!searched.includes(guess)) {
      if (is4(guess)) {
        console.log(`${guess} has length 4`);
        return true;
      } else {
        searchQueue.push(...graph.get(guess));
        searched.push(guess);
      }
    }
  }

  return false;
};

const result = breadthFirstSearch("you");
console.log(`result - ${result}`);
