// common function for string to number
function getAmount(id) {
  const getId = document.getElementById(id);
  const inputText = getId.value;
  const inputAmount = parseFloat(inputText);
  return inputAmount;
}

//function for  Calculate Button error handling
function showErrormessage(amount1, amount2, amount3, amount4, totalExpense) {
  if (amount1 < 0 || amount2 < 0 || amount3 < 0 || amount4 < 0) {
    document.getElementById("alert-paragraph3").style.display = "block";
    document.getElementById("alert-paragraph2").style.display = "none";
    document.getElementById("alert-paragraph1").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  } else if (amount1 < totalExpense) {
    document.getElementById("alert-paragraph1").style.display = "block";

    document.getElementById("alert-paragraph2").style.display = "none";

    document.getElementById("alert-paragraph3").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  } else if (
    isNaN(amount1) == true ||
    isNaN(amount2) == true ||
    isNaN(amount3) == true ||
    isNaN(amount4) == true
  ) {
    document.getElementById("alert-paragraph2").style.display = "block";

    document.getElementById("alert-paragraph1").style.display = "none";

    document.getElementById("alert-paragraph3").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  }
}
//function for handle saved button errors
function saveButtonErrors(num1, num2, num3) {
  // const num3 = document.getElementById("save").input;
  if (num1 > num2) {
    document.getElementById("alert-paragraph4").style.display = "block";
    document.getElementById("alert-paragraph5").style.display = "none";

    document.getElementById("saved-amount").innerText = "❗Error❗";

    document.getElementById("remaining-balance").innerText = "❗can't save❗";
  } else if (isNaN(num3) == true) {
    document.getElementById("alert-paragraph5").style.display = "block";
    document.getElementById("alert-paragraph4").style.display = "none";
    document.getElementById("alert-paragraph6").style.display = "none";

    document.getElementById("saved-amount").innerText = "❗Error❗";

    document.getElementById("remaining-balance").innerText = "❗can't save❗";
  } else if (num3 < 0) {
    document.getElementById("alert-paragraph6").style.display = "block";
    document.getElementById("alert-paragraph4").style.display = "none";
    document.getElementById("alert-paragraph5").style.display = "none";

    document.getElementById("saved-amount").innerText = "❗Error❗";

    document.getElementById("remaining-balance").innerText = "❗can't save❗";
  }
}

//common function for calculating Costs

function calculateCosts(incomeId, foodId, rentId, clothId) {
  //calling  common function for string to number
  const incomeAmount = getAmount("income");
  const foodCostAmount = getAmount("food-cost");
  const rentCostAmount = getAmount("rent-cost");
  const clothsCostAmount = getAmount("cloths-cost");

  const totalExpenseAmount = foodCostAmount + rentCostAmount + clothsCostAmount;

  //calculate total expenses
  const totalExpense = document.getElementById("total-expenses");
  totalExpense.innerText = totalExpenseAmount;
  //set Balance
  const balance = document.getElementById("balance");
  balance.innerText = incomeAmount - totalExpenseAmount;

  // calling error handle function
  showErrormessage(
    incomeAmount,
    foodCostAmount,
    rentCostAmount,
    clothsCostAmount,
    totalExpenseAmount
  );
}

// add event handler for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  //calling function for calculate expenses and  balance
  calculateCosts("income", "food-cost", "rent-cost", "cloths-cost");
});

//handle save event Listener
document.getElementById("save-btn").addEventListener("click", function () {
  // get saving Amount
  const incomeAmount = getAmount("income");
  const savedPercentage = getAmount("save");
  const savedAmount = (incomeAmount * savedPercentage) / 100;
  const totalSavingAmount = document.getElementById("saved-amount");
  totalSavingAmount.innerText = savedAmount;

  //get Remaining Balance
  const remainingBalance = document.getElementById("remaining-balance");
  const remainingBalanceText = remainingBalance.innerText;
  const remainingBalanceAmount = parseFloat(remainingBalanceText);

  const oldBalance = document.getElementById("balance").innerText;
  const oldBalanceAmount = parseFloat(oldBalance);
  const newRemainingBalance = oldBalanceAmount - savedAmount;
  remainingBalance.innerText = newRemainingBalance;

  //calling saved button error Handling Function

  saveButtonErrors(savedAmount, incomeAmount, savedPercentage);
});
