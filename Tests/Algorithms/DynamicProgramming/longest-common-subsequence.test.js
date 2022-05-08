import { longestCommonSubsequence } from "../../../Algorithms/DynamicProgramming/longest-common-subsequence";

describe("longestCommonSubstring", () => {
  test("ABCDGH - AEDFHR -> ADH", () => {
    const result = longestCommonSubsequence("ABCDGH", "AEDFHR");

    expect(result).toBe("ADH");
  });

  test("AGGTAB - GXTXAYB -> GTAB", () => {
    const result = longestCommonSubsequence("AGGTAB", "GXTXAYB");

    expect(result).toBe("GTAB");
  });

  test("GXTXAYB - AGGTAB -> GTAB", () => {
    const result = longestCommonSubsequence("GXTXAYB", "AGGTAB");

    expect(result).toBe("GTAB");
  });

  test("hello world - hello women -> hello wo", () => {
    const result = longestCommonSubsequence("hello world", "hello women");

    expect(result).toBe("hello wo");
  });

  test("recreation - relaxation -> reation", () => {
    const result = longestCommonSubsequence("recreation", "relaxation");

    expect(result).toBe("reation");
  });
});
