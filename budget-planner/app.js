const reasonInput = document.querySelector("#inputReason");
const amountInput = document.querySelector("#inputAmount");
const cancelButton = document.querySelector("#buttonClear");
const addButton = document.querySelector("#buttonAdd");
const expensesList = document.querySelector("#expensesList");
const totalExpenses = document.querySelector("#totalExpenses");
const alertCtrl = document.querySelector("ion-alert-controller");

let total = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
}

addButton.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;
  if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
    /*alertCtrl.create({
      message: "Please enter a valid reason and amount.",
      header: "ERROR: Invalid input",
      buttons: ['Okay'],
    }).then(myAlert => {
      myAlert.present();
    });*/
    console.log("returning");
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ': $' + enteredAmount;
  expensesList.appendChild(newItem);
  total += +enteredAmount;
  totalExpenses.textContent = total.toFixed(2);
  clear();
});

cancelButton.addEventListener("click", clear);

