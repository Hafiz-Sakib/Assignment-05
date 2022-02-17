function calculateCosts(incomeId, foodId, rentId, clothId) {
  //get  income value
  const income = document.getElementById(incomeId);
  const incomeText = income.value;
  const incomeAmount = parseFloat(incomeText);

  //get input values of expances
  const foodCost = document.getElementById(foodId);
  const rentCost = document.getElementById(rentId);
  const clothsCost = document.getElementById(clothId);
  const foodCostAmount = parseFloat(foodCost.value);
  const rentCostAmount = parseFloat(rentCost.value);
  const clothsCostAmount = parseFloat(clothsCost.value);
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
