const { sum, greeting, isEven, animals } = require("./utils");

describe("sum", () => {
  it("should return 2 + 3 = 5", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
  });
  it("should handle decimal numbers", () => {
    expect(sum(0.1002, 0.3)).toBeCloseTo(0.4);
  });
});

test("greeting - should return Hello name", () => {
  expect(greeting("John")).toBe("Hello John");
  expect(greeting("John")).toMatch(/Hello John/);
  expect(greeting("John")).toMatch(/^Hello John$/);
});

describe("isEven", () => {
  test("isEven - should return true if number is 4", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(4)).toBeTruthy();
    expect(isEven(4)).not.toBe(false);
    expect(isEven(4)).not.toBeFalsy();
  });

  test("isEven - should return false if number is 5", () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(5)).toBeFalsy();
    expect(isEven(5)).not.toBe(true);
    expect(isEven(5)).not.toBeTruthy();
  });
});

describe("validation", () => {
  it("should handle undefined values", () => {
    let x; //undefined
    expect(x).toBeUndefined();
    expect(x).not.toBeDefined();
    expect(x).not.toBeTruthy();
  });

  it("should handle null values", () => {
    let y = null;
    expect(y).toBeNull();
    expect(y).not.toBeTruthy();
  });
});

describe("animals", () => {
  it("should return an array of animals", () => {
    expect(animals).toBeInstanceOf(Array);
    expect(animals).toEqual(["cat", "dog", "cow", "sheep", "goat"]);
    expect(animals).toContain("cat");
    expect(animals).toContain("dog");
    expect(animals).not.toContain("lion");
  });
});
