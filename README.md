Describe numberFinder()
Test 1: It will find if 1 and return true or false"
Code:
  const input = "1"
  numberFinder(input);
Expected Outcome:
true

Test 2: It will find 1 in any length of number inputted."
Code:
  const input = "45516"
  numberFinder(input);
  const input = "455116"
  numberFinder(input);
Expected Outcome:
1
2

Test 3: It will find numbers 1 2 or 3 and return the count of how many times they appear in the string.
Code: 
  const input = "123123123"
  numberFinder(input);
Expected Outcome: 
1 = 3
2 = 3
3 = 3

describe inputArray()
Test 1: "It should produce a string containing the every whole number between 0 and input."
Code:
  const input = 5;
  inputArray(input);
Expected Outcome: [0,1,2,3,4,5]

Test 2: "It should convert a number array into a string array."
Code: 
const input = 5;
inputArray(input);
Expected Outcome : ["0","1","2","3","4","5"]

describe numberReplacer()
Test 1: "It should change the number 1 and return beep."
Code:
  const input = 1;
  numberReplacer(input);
Expected Outcome: "beep"
