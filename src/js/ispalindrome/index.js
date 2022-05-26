function isPalindrome(str) {
  if (typeof str !== "string" || !str) {
    return false;
  }
  // Removes unwanted characters from the string and lowercase
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, "");
  // reverse the string
  const reverseStr = lowRegStr.split("").reverse().join("");
  // Check if the reversed string is strictly equals to the lowRegStr and returns a Boolean
  return reverseStr === lowRegStr;
}

export default isPalindrome;
