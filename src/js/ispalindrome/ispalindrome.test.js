import isPalindrome from "./index";
import { words } from "../data";

test("array 'words' should not be empty", () => {
  expect(words.length).toBeGreaterThan(0);
});

test("array 'words' should contains only strings", () => {
  for (let i = 0; i < words.length; i++) {
    expect(typeof words[i]).toBe("string");
  }
});

test("param str is not empty and is a string", () => {
  expect(isPalindrome(null)).toBe(false);
  expect(isPalindrome(undefined)).toBe(false);
  expect(isPalindrome(1)).toBe(false);
});

test("if word is palindrome", () => {
  expect(isPalindrome("Kayak")).toBe(true);
});

test("if word is not palindrome", () => {
  expect(isPalindrome("Home")).toBe(false);
});
