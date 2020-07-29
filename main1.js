

function handleProductChange ( product, isIncrease) {
    const productInput = document.getElementById( product + '-count');
    const productCount = parseInt (productInput.value);
    let productNewCount = productCount;

    if ( isIncrease == true ) {
        productNewCount = productCount + 1;
    }
    if ( isIncrease == false && productCount > 0 ) {
        productNewCount = productCount - 1;
    }

    productInput.value = productNewCount;
    if ( product == 'phone') {
        productTotal = 1200 * productNewCount;
    }
    if ( product == 'case') {
        productTotal = 50 * productNewCount;
    }

    document.getElementById( product + '-total').innerText = productTotal;
}


function calculateTotal () {
    const phoneCount = document.getElementById('phone-count').value;
    const caseCount = document.getElementById('case-count').value;
    const phoneTotalPrice = phoneCount * 1200;
    const caseTotalPrice = caseCount * 50;
    const totalSubPrice = phoneTotalPrice + caseTotalPrice;
    document.getElementById('subtotal').innerText = totalSubPrice;
}


function taxTotal () {
    const total =  document.getElementById('subtotal').innerText;
    const totalAmount = parseFloat (total);
    const totalTax = total * 0.01;
    document.getElementById('tax').innerText = totalTax;
}


function total () {
    const subTotal = document.getElementById('subtotal').innerText;
    const subTotalAmount = parseFloat ( subTotal );
    const tax = document.getElementById('tax').innerText;
    const taxAmount = parseFloat ( tax );
    const total = subTotalAmount + taxAmount;
    document.getElementById('total').innerText = total;
}











// function handlePhoneChange ( isIncrease ) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt( phoneInput.value );
//     let phoneNewCount = phoneCount ;
//     if ( isIncrease == true ) {
//         phoneNewCount = phoneNewCount + 1;
//     }
//     if ( isIncrease == false && phoneNewCount > 0 ) {
//         phoneNewCount = phoneNewCount - 1;
//     }
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1200;
//     document.getElementById('phone-amount').innerText = phoneTotal;
// }


// function handleProductChange (isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt (caseInput.value);
//     let caseNewCount = caseCount;

//     if ( isIncrease == true ) {
//         caseNewCount = caseNewCount + 1;
//     }
//     if ( isIncrease == false && caseCount > 0 ) {
//         caseNewCount = caseNewCount - 1;
//     }

//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 50;
//     document.getElementById('case-total').innerText = caseTotal;
// }



document.getElementById('case-decrease').addEventListener('click', function() {
    handleProductChange( 'case', false);
    calculateTotal()
    taxTotal ()
    total ()
})



document.getElementById('case-increase').addEventListener('click', function() {
    handleProductChange('case', true);
    calculateTotal()
    taxTotal ()
    total ()
})


document.getElementById('phone-increase').addEventListener('click', function() {
    handleProductChange('phone', true);
    calculateTotal()
    taxTotal ()
    total ()
})


document.getElementById('phone-decrease').addEventListener('click', function() {
    handleProductChange('phone', false);
    calculateTotal()
    taxTotal ()
    total ()
})

