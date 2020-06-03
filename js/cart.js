/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {

    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cartItems);
    for (var i = 0; i < cartItems.length; i++) {
        cart = new Cart(cartItems[i].name, cartItems[i].quantity);

    }
    console.log(Cart.all);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    // var t = document.getElementById('cart');
    // for (var i = 1; i < t.length; i++) {
    //     if (t.hasChildNodes()) {
    //         t.removeChild(t.childNodes[i]);
    //     }
    // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    // TODO: Find the table body
    var table = document.getElementById('cart');
    // TODO: Iterate over the items in the cart
    for (var i = 0; i < Cart.all.length; i++) {
        var row = document.createElement('tr');
        table.appendChild(row);
        var td1 = document.createElement('td');
        var a = document.createElement('a');
        row.appendChild(td1);
        td1.appendChild(a);
        a.textContent = 'x';
        a.setAttribute('id', `${i}`);

        var td2 = document.createElement('td');
        row.appendChild(td2);
        td2.textContent = Cart.all[i].quantity;

        var td3 = document.createElement('td');
        row.appendChild(td3);
        td3.textContent = Cart.all[i].name;
    }
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    var t = document.getElementById('cart');
    // we are stopped here

    // var deletedNode = event.target.id;
    // console.log();
    // Cart.all.splice(deletedNode);
    // renderCart();


    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table



}

// This will initialize the page and draw the cart on screen
renderCart();