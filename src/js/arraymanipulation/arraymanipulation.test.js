import { inAlphabeticalOrder, inDescendingOrder, allAges } from "./index";
import { people } from "../data";

test("array 'people' should not be empty", () => {
  expect(people.length).toBeGreaterThan(0);
});

test("array 'people' should contain object", () => {
  expect(people).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: "Alice",
        age: 42
      })
    ])
  );
});

test("people array in descending order", () => {
  expect(inDescendingOrder(people)[0].age).toEqual(50);
});

test("people array in alphabetical order", () => {
  expect(inAlphabeticalOrder(people)[0].name).toEqual("Alice");
});

test("all ages array should contain only numbers", () => {
  for (let i = 0; i < allAges(people); i++) {
    expect(typeof allAges(people)[i]).toBe("number");
  }
});
