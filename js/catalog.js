/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optn = document.createElement('option');
    optn.textContent = `${Product.allProducts[i].name}`;
    selectElement.append(optn);
    // optn.setAttribute('value', '${Product.allProducts[i].name}');
    

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
    event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();


}
var itemName,quan;
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
   itemName = event.target.itemsel.value;
  console.log(itemName);
  // TODO: get the quantity
   quan = event.target.quantity.value;
  console.log(quan);

  // TODO: using those, add one item to the Cart
  cart.addItem(itemName,quan);
  // console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
 var numbers= document.getElementById("itemCount");
 numbers.textContent= ' : '+Cart.all.length;

}
 
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information

  // for(var i=0; i< Cart.all.length; i++){
    var divcart= document.getElementById("cartContents");
    // divcart.parentNode.removeChild(p);
    var pC = document.createElement('p');
    divcart.appendChild(pC);
    // pC.textContent= `${Cart.all[i].quantity}: ${Cart.all[i].name}`;
    pC.textContent= `${quan}: ${itemName}`;

  // }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
