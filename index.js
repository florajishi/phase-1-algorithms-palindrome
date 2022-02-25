const word = ""
function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('')
  return word === reversed ? true : false
}

/* 
  Add your pseudocode here
define word as string
function isPalindrome takes in word variable which is a string ""
  reverse the word string by splitting letters as array, reversing, then join() method to recreate string
  does the original string equal the reversed string ? if so, return true. if not, return false
*/

/*
  The program only takes in one single word and defines if that is a palindrome.
  It will not locate any hidden palindromes within a longer string or sentence string
  A word is input into the function, for example "robot"
  The word "racecar" is then split into an array [r, o, b, o, t]
  The array is reversed, giving us [t, o, b, o, r]
  The join method creates the final reversed edit of const word: tobor
  does tobor === robot ? nope! so the program returns false
  In the case of [r, a, c, e, c, a, r], which turns into racecar
  racecar === racecar so the program returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
