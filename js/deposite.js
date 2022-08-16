//step no:-1 :  add event listener to the deposite btn!!!
document.getElementById('btn-deposite').addEventListener('click',function(){
    //step no:-2 : get the depusite amount from the deposite inpit field
    // For input field use .value to the value inside the input feild
    const depusiteField = document.getElementById('deposite-field') ;
    const newDepositeAmountstring = depusiteField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountstring);
    //step-3 : get the deposit toal or current amount
    //for non input (element other then input, text area) use inner text to get the text
    const depositeTotalElement = document.getElementById('deposite-total')
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);



    //step-4: add numbers to set the total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;

    //step:7 : clear the deposite field
    depusiteField.value=' ';
    
})