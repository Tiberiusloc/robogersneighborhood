//Business Logic

const array = [];
function inputArray(input) {
  const array = [];
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  const stringArray = array.toString().split(",");
  return stringArray;
}
const outcomeArray = [];
function mrRoboger(input) {
  const stringArray = inputArray(input);
  stringArray.forEach(function(element) {
    if (element.includes("3")) {
      outcomeArray.push("Won't you be my neighbor?");
    } else if (element.includes("2")) {
      outcomeArray.push("Boop!");
    } else if (element.includes("1")) {
      outcomeArray.push("Beep!")
    } else {
      outcomeArray.push(element)
    }
  });
  return outcomeArray
}
function numberFinder(input){
  const inputArray = input.split("");
  console.log(inputArray)
  let numberCount1 = 0;
  let numberCount2 = 0;
  let numberCount3 = 0;
  inputArray.forEach(function(element) {
    if (element === "1") {
    return "Beep"
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
  if (input === 1) {
    return "Beep";
  } else if (input === 2) {
  return "Boop"
  } else if (input === 3) {
    return "Won't you be my neighbor?"
  }
  return false
}
function includesNumbers(input){
const outcomeArray = [];
if (input.includes("3")){
  outcomeArray.push("Won't you be my neighor?")
} else if (input.includes("2")){
  outcomeArray.push("Boop")
} else if (input.includes("1")){
  outcomeArray.push("Beep")
} else {
  outcomeArray.push(input + "");
}
return outcomeArray;
}
