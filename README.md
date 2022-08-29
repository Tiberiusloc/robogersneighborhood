

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

<details>
<summary>Show Tests</summary>

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


Describe mrRoboger()



Test 1: "It should take the value of any instance of 3 and run it up to that number and push out to the outcomeArray."

const input = "10";

mrRoboger(input);

Expected result: 
['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!']
  

Test 2: "It should take the value of any instance of 2 and run it up to that number and push out to the outcomeArray."

const input = "22";

mrRoboger(input);

Expected result: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!']

  

Test 3: "It should take the value of any instance of 1 and run it up to that number and push to the outcomeArray."

Code:

const input = "18"

mrRoboger(input)

Expected Outcome: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!']

</detail>
## Known Bugs


* No known bugs at this time


## Contact Information


_If running into any problems or have any questions, ideas and or concerns please reach out to me by email at **tlockett680@gmail.com**_


## License
[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)


Copyright (c) _08/2022_ _Tiberius Lockett_

