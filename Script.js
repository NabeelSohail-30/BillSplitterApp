function Reset() {
    document.getElementById('BillAmount').value = null;
    document.getElementById('TipAmount').value = null;
    document.getElementById('Person').value = null;
    document.getElementById('total-amount').value = null;
    document.getElementById('TipPerPerson').value = null;
    document.getElementById('BillAmountPerPerson').value = null;
}

function CalculateBill() {
    var BillAmount = Number(document.getElementById('BillAmount').value);
    var TipAmount = Number(document.getElementById('TipAmount').value);
    var NumOfPerson = Number(document.getElementById('Person').value);
    var TotalAmount = document.getElementById('total-amount');
    var TipPerPerson = document.getElementById('TipPerPerson');
    var BillAmountPerPerson = document.getElementById('BillAmountPerPerson');

    if (NumOfPerson == 0) {
        NumOfPerson = 1;
    }

    TotalAmount.value = Number(BillAmount + TipAmount);
    TipPerPerson.value = (TipAmount / NumOfPerson);
    BillAmountPerPerson.value = (TotalAmount.value / NumOfPerson);
    //console.log(BillAmount + TipAmount);
}