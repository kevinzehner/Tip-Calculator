"use strict";

const calcTip = function () {
  //create variables for user input
  const bill = parseFloat(document.getElementById("bill-amount").value);
  const tipOption = document.getElementById("tip-percentage").value;

  //create tip options
  let tipPercentage = 0.1;
  if (tipOption === "10%") {
    tipPercentage = 0.1;
  } else if (tipOption === "20%") {
    tipPercentage = 0.2;
  } else if (tipOption === "25%") {
    tipPercentage = 0.25;
  }

  //calculation to work out tip
  const tipAmount = bill * tipPercentage;
  const roundedTip = tipAmount.toFixed(2);

  return roundedTip;
};

//display tip amount
const displayTip = function () {
  const tipAmount = calcTip();
  const tipOutput = document.getElementById("tip-amount");
  tipOutput.innerHTML = `$${tipAmount}`;
};

// adding eventlistener to calculate button
const calculateTipButton = document.getElementById("calculate-tip-button");
calculateTipButton.addEventListener("click", displayTip);

// remove the event listener
calculateTipButton.removeEventListener("click", displayTip);

// add the event listener again
setTimeout(function () {
  calculateTipButton.addEventListener("click", displayTip);
}, 1000);
