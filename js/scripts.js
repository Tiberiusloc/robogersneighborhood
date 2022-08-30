//Business Logic

function inputArray(input) {
  const array = [];
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  const stringArray = array.toString().split(",");
  console.log(stringArray + "stringarray")
  return stringArray;
}

function mrRoboger(inputArray) {
  const outcomeArray = [];
  inputArray.forEach(function(element) {
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
  const paragraph = document.getElementById("roboresult")
  let hideButton = document.getElementById("submitButton");
  let userhide = document.getElementById("user");
  let robohide = document.getElementById("roboger");
  let resetHide = document.getElementById("reset")
  userhide.removeAttribute("class","hidden");
  robohide.removeAttribute("class","hidden");
  hideButton.setAttribute('class', 'hidden');
  resetHide.removeAttribute("class", "hidden")
  const form = document.getElementById("form");
  paragraphUser.innerHTML = (userInput);
  paragraph.innerText = (resultArray);
  form.reset();
  console.log(checkArray)
  console.log(resultArray)
}
window.addEventListener("load", function(){
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", handleSubmission);
  
});
