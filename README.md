

# My Neighbor Roboger


#### By: _**Tiberius Lockett**_


#### Project Week 3 - Arrays and Looping


## Technologies Used


* *_HTML_*  
* *_CSS_*  
* *_Javascript_*
* *_Bootstrap_*


## Description


_This application is created with Test Driven Development. The website will output a list of numbers from 0 to the user input number. It replaces certain numbers with a string. For numbers containing a 1 it will respond "Beep!", for numbers containing a 2 it will respond "Boop!", and for numbers containing a 3 it will respond with Mr Robogers favorite saying of "Won't you be my neighbor?"._


## Setup/Installation Requirements


* Clone this repository to your desktop at https://github.com/Tiberiusloc/robogersneighborhood
* Download the files to your local machine.
* Open index.html in your default browser.
* Enter a number into the user input and click the submit button.

## Tests
~~~Describe numberFinder()

Test 1: It will find if 1 and return true or false"

Code:

const input = "1";

numberFinder(input);

Expected Outcome:

true

  

Test 2: It will find 1 in any length of number inputted."

Code:

const input = "45516";

numberFinder(input);

const input = "455116";

numberFinder(input);

Expected Outcome:

1

2

  

Test 3: It will find numbers 1 2 or 3 and return the count of how many times they appear in the string.

Code:

const input = "123123123";

numberFinder(input);

Expected Outcome:

1 = 3

2 = 3

3 = 3
~~~
  
~~~
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
~~~
  
~~~
describe numberReplacer()

  

Test 1: "It will change the number 1 and return beep."

Code:

const input = 1;

numberReplacer(input);

Expected Outcome: "beep"

  

Test 2: "It will change the number 2 and return boop."

Code:

const input = 2;

numberReplacer(input);

Expected Outcome:

"boop"

  

Test 3: "It will change the number 3 and return "Wont you be my neighbor?"

const input = 2;

numberReplacer(input);

Expected Outcome:

"Wont you be my neighbor?"
~~~
  
~~~
describe includesNumbers()

Test 1: "It should recognize the number 3 in a multiple number string and still return the output "wont you be my neighbor?"

Code:

const input = "39";

includesNumbers(input);

Expected Outcome: "Won't you be my neighbor?"

  

Test 2: "It should recognize the number 2 in a multiple number string and still return the output "boop"

Code:

const input = "27";

includesNumbers(input);

Expected Outcome: "Boop"

  

Test 3: "It should recognize the number 1 in a multiple number string and still return the output "Beep"

Code:

const input = "17";

includesNumbers(input);

Expected Outcome: "Beep"
~~~
  
~~~
Describe mrRoboger()

  

Test 1: "It should take the value of any instance of 3 and run it up to that number and push out to the outcomeArray."

const input = "39";

mrRoboger(input);

Expected result: ["Won't you be my neighbor? "];

  

Test 2: "It should take the value of any instance of 2 and run it up to that number and push out to the outcomeArray."

const input = "22";

mrRoboger(input);

Expected result: ["Boop! "];

  

Test 3: "It should take the value of any instance of 1 and run it up to that number and push to the outcomeArray."

Code:

const input = "1"

mrRoboger(input)

const input2 = "18"

Expected Outcome: ["Beep! "]
~~~

## Known Bugs


* No known bugs at this time


## Contact Information


_If running into any problems or have any questions, ideas and or concerns please reach out to me by email at **tlockett680@gmail.com**_


## License
[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)


Copyright (c) _08/2022_ _Tiberius Lockett_

