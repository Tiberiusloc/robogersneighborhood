function numberFinder(input)
{
  const inputArray = input.split("");
  console.log(inputArray)
  let numberCount1 = 0;
  let numberCount2 = 0;
  let numberCount3 = 0;
  inputArray.forEach(function(element) {
    if (element === "1") {
    numberCount1++;
  } else if (element === "2") {
    numberCount2++;
  } else if (element === "3") 
    numberCount3++;
}) 
console.log(numberCount1)
console.log(numberCount2)
console.log(numberCount3)
}

function numberReplacer(input) {
  const inputArray = input.split("");
  
}