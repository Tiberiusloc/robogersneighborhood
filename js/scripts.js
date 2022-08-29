//Business Logic

const array = [];
function inputArray(input) {
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

//UI Logic


function handleSubmission(event){
  event.preventDefault();
  const userInput = document.getElementById("user-Input").value;
  const checkArray = inputArray(userInput);
  const resultArray = mrRoboger(checkArray).join("... ");
  const paragraphUser = document.getElementById("result");
  const paragraph = document.getElementById("roboresult");
  let hideButton = document.getElementById("submitButton");
  let userhide = document.getElementById("user");
  let robohide = document.getElementById("roboger");
  let resetHide = document.getElementById("reset")
  userhide.removeAttribute("class","hidden");
  robohide.removeAttribute("class","hidden");
  hideButton.setAttribute('class', 'hidden');
  resetHide.removeAttribute('class', 'hidden')
  paragraph.append(resultArray);
  paragraphUser.append(userInput);
  const form = document.getElementById("form");
  form.reset();
  console.log(userInput + "This is user input")
  console.log(checkArray + "This is check array")
  console.log(resultArray + "This is result array")
}
window.addEventListener("load", function(){
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", handleSubmission);
  
});
