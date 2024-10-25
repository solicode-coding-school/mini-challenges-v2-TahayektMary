const description = document.getElementById('description');
    const amount = document.getElementById('amount');
    const addExpenseBtn = document.getElementById('add-expense-btn');
    const addIncomeBtn = document.getElementById('add-income-btn');
    const expenseList = document.getElementById('expense-list');
    const incomeList = document.getElementById('income-list');

    let totalIncome = 0.00;
    let totalExpenses = 0.00;

    function createDeleteButton(listItem, isExpense, amount) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      const icon = document.createElement('i');
      icon.className = 'fas fa-trash';
      deleteBtn.appendChild(icon);

      deleteBtn.addEventListener('click', function () {
        if (isExpense) {
          totalExpenses -= amount;
        } else {
          totalIncome -= amount;
        }
        listItem.remove();
        updateSummary();
      });
      return deleteBtn;
    }

    addExpenseBtn.addEventListener('click', function() {
      if (description.value === '' || amount.value === '' || parseFloat(amount.value) <= 0) {
        document.getElementById('Erreur').style.visibility = 'visible';
        return;
      } else {
        document.getElementById('Erreur').style.visibility = 'hidden';
      }

      const newExpense = document.createElement('li');
      newExpense.classList.add('transaction-item');
      const expenseAmount = parseFloat(amount.value);
      newExpense.innerHTML = `<p>${description.value}</p><p>$${expenseAmount.toFixed(2)}</p>`;
      newExpense.appendChild(createDeleteButton(newExpense, true, expenseAmount));
      expenseList.appendChild(newExpense);

      totalExpenses += expenseAmount;
      updateSummary();

      description.value = '';
      amount.value = '';
    });

    addIncomeBtn.addEventListener('click', function() {
      if (description.value === '' || amount.value === '' || parseFloat(amount.value) <= 0) {
        document.getElementById('Erreur').style.visibility = 'visible';
        return;
      } else {
        document.getElementById('Erreur').style.visibility = 'hidden';
      }

      const newIncome = document.createElement('li');
      newIncome.classList.add('transaction-item');
      const incomeAmount = parseFloat(amount.value);
      newIncome.innerHTML = `<p>${description.value}</p><p>$${incomeAmount.toFixed(2)}</p>`;
      newIncome.appendChild(createDeleteButton(newIncome, false, incomeAmount));
      incomeList.appendChild(newIncome);

      totalIncome += incomeAmount;
      updateSummary();

      description.value = '';
      amount.value = '';
    });

    function updateSummary() {
      document.getElementById('money-earned').innerText = `$${totalIncome.toFixed(2)}`;
      document.getElementById('money-spent').innerText = `$${totalExpenses.toFixed(2)}`;
      document.getElementById('money-available').innerText = `$${(totalIncome - totalExpenses).toFixed(2)}`;
    }