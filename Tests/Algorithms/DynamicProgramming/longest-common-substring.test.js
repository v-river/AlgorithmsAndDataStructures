import { longestCommonSubstring } from "../../../Algorithms/DynamicProgramming/longest-common-substring";

describe("longestCommonSubstring", () => {
  test("universal - university -> univers", () => {
    const result = longestCommonSubstring("universal", "university");

    expect(result).toBe("univers");
  });

  test("universal - [empty] -> [empty]", () => {
    const result = longestCommonSubstring("universal", " ");

    expect(result).toBe("");
  });

  test("[blank] - universal -> [empty]", () => {
    const result = longestCommonSubstring("   ", "universal");

    expect(result).toBe("");
  });

  test("hello world - hello women -> hello wo", () => {
    const result = longestCommonSubstring("hello world", "hello women");

    expect(result).toBe("hello wo");
  });

  test("recreation - relaxation -> ation", () => {
    const result = longestCommonSubstring("recreation", "relaxation");

    expect(result).toBe("ation");
  });
});
