import "./styles/main.scss";
import { words, people } from "./js/data";
import isPalindrome from "./js/ispalindrome";
import { inAlphabeticalOrder, inDescendingOrder, allAges } from "./js/arraymanipulation";

words.forEach(word => {
  console.log(`Is "${word}" Palindrome?`, isPalindrome(word));
});
console.log("Order the people by age in decending order", inDescendingOrder(people));
console.log("Order the people by name alphabetically A-Z", inAlphabeticalOrder(people));
console.log("Pull just the ages into a new array", allAges(people));
