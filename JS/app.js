document.getElementById("calculate-btn").addEventListener("click", function () {
  //get  income value
  const income = document.getElementById("income");
  const incomeText = income.value;
  const incomeAmount = parseFloat(incomeText);

  //get input values of expances
  const foodCost = document.getElementById("food-cost");
  const rentCost = document.getElementById("rent-cost");
  const clothsCost = document.getElementById("cloths-cost");
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
  if (totalExpenseAmount > incomeAmount) {
    document.body.style.backgroundColor = "red";
  }
});
