const description = document.getElementById('description'); // HTML element
const amount = document.getElementById('amount'); // HTML element
const addExpenseBtn = document.getElementById('add-expense-btn'); // HTML element
const addIncomeBtn = document.getElementById('add-income-btn'); // HTML element
const expenseList = document.getElementById('expense-list');
const incomeList = document.getElementById ('income-list');




let totalIncome = 0.00;
let totalExpenses = 0.00;

addExpenseBtn.addEventListener('click', function(){

  if (description=== '' && amount.value =='' && parseFloat(amount.value) > 0){
    alert('veuillez remplir les champs')

  const newExpense = document.createElement('li');
  newExpense.classList.add('transaction-item');
  newExpense.innerHTML = `<p>${description.value}</p><p>$${parseFloat(amount.value).toFixed(2)}</p>`;
  expenseList.appendChild(newExpense);

  totalExpenses += parseFloat(amount.value);

  updateSummary();
    description.value = '';
    amount.value = '';
    // 1. ADD NEW LI ELEMENT TO INCOMES LIST
    // 2. CALCULATE TOTAL INCOMES : mathematical operations
    // 3. UPDATE MONEY EARNED
    // 4. UPDATE MONEY AVAILABLE 
  }
});


addIncomeBtn.addEventListener('click', function(){
  const newIncome = document.createElement('li');
  newIncome.classList.add('transaction-item');
  newIncome.innerHTML = `<p>${description.value}</p><p>$${parseFloat(amount.value).toFixed(2)}</p>`;
  incomeList.appendChild(newIncome);

  totalIncome += parseFloat(amount.value);

updateSummary();
     
     description.value = '';
     amount.value = '';
  // 1. ADD NEW LI ELEMENT TO EXPENSES LIST : createElement(), appendChild()
  // 2. CALCULATE TOTAL EXPENSES : mathematical operations
  // 3. UPDATE MONEY SPENT : innerHTML or innerText or textContent
  // 4. UPDATE MONEY AVAILABLE : innerHTML or innerText or textContent
});
function updateSummary() {
  document.getElementById('money-earned').innerText = `$${totalIncome.toFixed(2)}`;
  document.getElementById('money-spent').innerText = `$${totalExpenses.toFixed(2)}`;
  document.getElementById('money-available').innerText = `$${(totalIncome - totalExpenses).toFixed(2)}`;
}
