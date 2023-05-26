function reverse(word){
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  Reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  Created a function that returns true if the word is a palindrome and false if the word is not.
  That means if the word is the same as the word in reverse, I should return true.
  To compare the word to the word in reverse, I created a reverse function or method.
  To do that, I first chain the split() method onto the input string to create an array of every character of the input string.
  Second, I chain the reverse() to the split() method to create a new array which grows in porportion the to input but in reverse order.
  Third, I chain the join() method to the reverse() method to join that new array to a string.
  Then I pass the reverse method in the function code block to be use to make comparison.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;
