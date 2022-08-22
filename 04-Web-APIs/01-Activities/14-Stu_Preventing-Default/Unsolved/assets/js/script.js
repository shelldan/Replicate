// please link the js file to html first!

//Goal: need to calculate Tip amount and Total

// Tip amount = total price of meal * tip percentage

// total = Tip amount + total price of meal 

// when click the submit (addEventListener), we will display the tip amount & total

var totalEl = document.getElementById("total");
var tipEl = document.getElementById("tip-percentage")
var submitEl = document.getElementById("submit")

function calculateTip (total, tipPercentage){
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

//why can't use calculateTip as parameter? 
function calculateTotal (total,tipAmount){
  return parseFloat(total) + parseFloat(tipAmount);
}


submitEl.addEventListener("click",addTip);

function addTip (event){
  event.preventDefault();
  var total = totalEl.value;
  var tipPercentage = tipEl.value *0.01;
  var tipAmount = calculateTip(total,tipPercentage);
  var newAmount = calculateTotal (total,tipAmount);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.getElementById("new-total").textContent = newAmount;
}



//-------------------Answer------------------// 

// var tipEl = document.querySelector("#tip-percentage");
// var totalEl = document.querySelector("#total");
// var submitEl = document.querySelector("#submit");

// function calculateTip(total, tipPercentage) {
//   var roundedResult = (total * tipPercentage).toFixed(2);
//   return roundedResult;
// }

// function calculateTotal(total, tipAmount) {
//   return parseFloat(total) + parseFloat(tipAmount);
// }

// function addTip(event) {
//   event.preventDefault();
//   var tipPercentage = tipEl.value * .01;
//   var total = totalEl.value;
//   var tipAmount = calculateTip(total, tipPercentage);
//   var newTotal = calculateTotal(tipAmount, total);
//   document.querySelector("#tip-amount").textContent = tipAmount;
//   document.querySelector("#new-total").textContent = newTotal.toFixed(2);
// }

// submitEl.addEventListener("click", addTip);

//Users should be able to see the calculated tip amount and total on the screen after clicking on the submit button