// common function for string to number
function getAmount(id) {
  const getId = document.getElementById(id);
  const inputText = getId.value;
  const inputAmount = parseFloat(inputText);
  return inputAmount;
}

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

  if (
    incomeAmount < 0 ||
    foodCostAmount < 0 ||
    rentCostAmount < 0 ||
    clothsCostAmount < 0
  ) {
    document.getElementById("alert-paragraph3").style.display = "block";
    document.getElementById("alert-paragraph2").style.display = "none";
    document.getElementById("alert-paragraph1").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  } else if (totalExpenseAmount > incomeAmount) {
    document.getElementById("alert-paragraph1").style.display = "block";

    document.getElementById("alert-paragraph2").style.display = "none";

    document.getElementById("alert-paragraph3").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  } else if (
    isNaN(incomeAmount) == true ||
    isNaN(foodCostAmount) == true ||
    isNaN(rentCostAmount) == true ||
    isNaN(clothsCostAmount) == true
  ) {
    document.getElementById("alert-paragraph2").style.display = "block";

    document.getElementById("alert-paragraph1").style.display = "none";

    document.getElementById("alert-paragraph3").style.display = "none";

    document.getElementById("balance").innerText = "❗Error❗";

    document.getElementById("total-expenses").innerText =
      "❗can't expense money❗";
  }
}

// add event handler for calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  //calling function for calculate expenses and  balance
  calculateCosts("income", "food-cost", "rent-cost", "cloths-cost");
});
