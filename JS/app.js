// common function for string to number
function getAmount(id) {
  const getId = document.getElementById(id);
  const inputText = getId.value;
  const inputAmount = parseFloat(inputText);
  return inputAmount;
}

//function for error handling
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
