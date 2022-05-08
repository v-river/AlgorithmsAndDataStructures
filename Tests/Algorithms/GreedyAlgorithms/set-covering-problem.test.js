import { setCoveringProblem } from "../../../Algorithms/GreedyAlgorithms/set-covering-problem";

describe("setCoveringProblem", () => {
  describe("find the minimum set of subsets that would cover the entire set", () => {
    test("arrays", () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const subsets = [
        ["d", "e", "f"],
        ["b", "d", "a"],
        ["c", "e", "g"],
        ["e", "f"],
        ["g", "h"],
      ];
      const expected = [
        ["d", "e", "f"],
        ["b", "d", "a"],
        ["c", "e", "g"],
        ["g", "h"],
      ];

      const result = setCoveringProblem(letters, subsets);

      expect(result).toEqual(expected);
    });

    test("strings", () => {
      const letters = "abcdefgh";
      const subsets = ["def", "bda", "ceg", "ef", "gh"];
      const expected = ["def", "bda", "ceg", "gh"];

      const result = setCoveringProblem(letters, subsets).map((subset) =>
        subset.join("")
      );

      expect(result).toEqual(expected);
    });
  });
});
