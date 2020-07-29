
// iPhone 11 128GB Black

function addValue (id, Value) {
    var valueId = document.getElementById(id).value;
    var currentValueNumber = parseFloat(valueId);
    var totalNumber = currentValueNumber + Value;
    return document.getElementById(id).value = totalNumber;
} 

function price (id, addPrice) {
    var priceId = document.getElementById(id).innerText;
    var currentPrice = parseFloat(priceId);
    var totalPrice = currentPrice + addPrice ;
    return document.getElementById(id).innerText = totalPrice;

}


var plus = document.getElementById('plus');
plus.addEventListener('click', function(){

    addValue('product', 1);
    price('productAmount', 1219);
})

var minus = document.getElementById('minus');
minus.addEventListener('click', function(){

    addValue('product', -1);
    price('productAmount', -1219);
})



// cover Section


var coverPlus = document.getElementById('coverPlus');
coverPlus.addEventListener('click', function(){

    addValue('cover', 1);
    price('coverAmount', 59);
})

var coverMinus = document.getElementById('coverMinus');
coverMinus.addEventListener('click', function(){

    addValue('cover', -1);
    price('coverAmount', -59);
})

function getAmount (id) {
    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);
    return currentNumber;
}

document.querySelector('.total').addEventListener('click', function() {
    //handle click
    var iPhone = getAmount("productAmount");
    var cover = getAmount("coverAmount");
    var totalPrice = iPhone + cover;

    var subtotal = document.getElementById('subtotal').innerText;
    var subtotalNumber = parseFloat(subtotal);
    var totalAmount = totalPrice + subtotalNumber;
    document.getElementById('subtotal').innerText = totalAmount;
  })




// // total section
// var total = document.getElementsByClassName('total');

// total.addEventListener('click', function(event) {
//     var iPhone = getAmount("productAmount");
//     var cover = getAmount("coverAmount");
//     var totalPrice = iPhone + cover;

//     var subtotal = document.getElementById('subtotal').innerText;
//     var subtotalNumber = parseFloat(subtotal);
//     var totalAmount = totalPrice + subtotalNumber;
//     document.getElementById('subtotal').innerText = totalAmount;
// })
