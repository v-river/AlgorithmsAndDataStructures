import { binarySearch } from "../../../Algorithms/Search/binary-search";

describe("binarySearch", () => {
  describe("should return the index of the found element", () => {
    test("3 in [1, 3, 4, 5] -> 1", () => {
      const list = [1, 3, 4, 5];
      const item = 3;

      const index = binarySearch(list, item);

      expect(index).toStrictEqual(1);
    });

    test("3 in [1, 3, 5, 7, 9] -> 1", () => {
      const list = [1, 3, 5, 7, 9];
      const item = 3;

      const index = binarySearch(list, item);

      expect(index).toStrictEqual(1);
    });
  });

  test("should return -1 if no item is found", () => {
    let list = [1, 3, 4, 5];
    let item = 2;

    let index = binarySearch(list, item);

    expect(index).toStrictEqual(-1);
  });
});
