import {
  selectionSort,
  selectionSortV2,
} from "../../../Algorithms/Sort/selection-sort";

describe("selectionSort", () => {
  describe("must sort the array in place", () => {
    test("[2, 5, 1, 4, 8] -> [1, 2, 4, 5, 8]", () => {
      const list = [2, 5, 1, 4, 8];
      const link = list;

      selectionSort(list);

      expect(list).toBe(link);
      expect(list).toStrictEqual([1, 2, 4, 5, 8]);
      expect(link).toStrictEqual([1, 2, 4, 5, 8]);
    });

    test("[1, 2, 4, 5] -> [1, 2, 4, 5]", () => {
      const list = [1, 2, 4, 5];
      const link = list;

      selectionSort(list);

      expect(list).toBe(link);
      expect(list).toStrictEqual([1, 2, 4, 5]);
      expect(link).toStrictEqual([1, 2, 4, 5]);
    });

    test("[1] -> [1]", () => {
      const list = [1];
      const link = list;

      selectionSort(list);

      expect(list).toBe(link);
      expect(list).toStrictEqual([1]);
      expect(link).toStrictEqual([1]);
    });

    test("[] -> []", () => {
      const list = [];
      const link = list;

      selectionSort(list);

      expect(list).toBe(link);
      expect(list).toStrictEqual([]);
      expect(link).toStrictEqual([]);
    });
  });
});

describe("selectionSortV2", () => {
  describe("must return a new sorted array", () => {
    test("[2, 5, 1, 4, 8] -> [1, 2, 4, 5, 8]", () => {
      const list = [2, 5, 1, 4, 8];

      const result = selectionSortV2(list);

      expect(list).toStrictEqual([]);
      expect(result).toStrictEqual([1, 2, 4, 5, 8]);
    });

    test("[1, 2, 4, 5] -> [1, 2, 4, 5]", () => {
      const list = [1, 2, 4, 5];

      const result = selectionSortV2(list);

      expect(list).toStrictEqual([]);
      expect(result).toStrictEqual([1, 2, 4, 5]);
    });

    test("[1] -> [1]", () => {
      const list = [1];

      const result = selectionSortV2(list);

      expect(list).toStrictEqual([]);
      expect(result).toStrictEqual([1]);
    });

    test("[] -> []", () => {
      const list = [];

      const result = selectionSortV2(list);

      expect(list).toStrictEqual([]);
      expect(result).toStrictEqual([]);
      expect(result).not.toBe(list);
    });
  });
});
