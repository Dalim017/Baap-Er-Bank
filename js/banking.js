// handle deposite button event 
document.getElementById("deposit-button").addEventListener("click", function(){
    // get the amount deposited 
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

// Update account Balance

const balanceTotal = document.getElementById("balance-total");
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field 
    depositInput.value = "";

})


// handle withdraw event handler

document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmountText =balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalAmountText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input 

    withdrawInput.value = "";
})