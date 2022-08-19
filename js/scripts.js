function numberFinder(input){
  const inputArray = input.split("");
  console.log(inputArray)
  let numberCount = 0;
  inputArray.forEach(function(element) {
    if (element === "1")
    numberCount++;
  }
  console.log(numberCount);
}