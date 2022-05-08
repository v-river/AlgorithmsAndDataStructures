import { jest } from "@jest/globals";

import { factorial } from "../../../Algorithms/Recursion/factorial";

describe("factorial", () => {
  test("7! -> 5040", () => {
    const result = factorial(7);

    expect(result).toBe(5040);
  });

  test("3! -> 6", () => {
    const result = factorial(3);

    expect(result).toBe(6);
  });

  test("1! -> 1", () => {
    const result = factorial(1);

    expect(result).toBe(1);
  });

  test("0! -> 1", () => {
    const result = factorial(0);

    expect(result).toBe(1);
  });

  test("should be called 4 times for 3!", () => {
    const wrapper = {
      factorial: (number) =>
        number === 0 ? 1 : number * wrapper.factorial(number - 1),
    };

    const mockedFactorial = jest.spyOn(wrapper, "factorial");

    const result = wrapper.factorial(3);

    expect(result).toBe(6);
    expect(mockedFactorial).toHaveBeenCalledTimes(4);
  });
});
