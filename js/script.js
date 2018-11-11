/*Objective: Grocery Store Website

Using checkboxes, create a website for a grocery store where the user can pick from different items. The checkbox should show the name of the item, the price and a picture of the item.

Each time the user checks a check box for an item, the total price should go up. Display the total price somewhere on the page.

Each time the user unchecks an item, the total price should go down. Have the total price start off at $0.00.

Create a checkout page, showing the user all of the items they are purchasing and how much their total price is.


var item = event.type;   //Shows Type of Event; click, hover, etc.
console.log(item);
var item = event.target;  //Show what html element is being targeted; button, p, etc.
console.log(item);
var item = $(event.target).html();  //Shows content inside existing html element in index.html file.
console.log(item);
item = $(event.target).html("Undo");
*/

$(document).ready(function(){
  var listOfItems = [];
  var totalPrice = 0;

  //Item Button - Add
  $("#item button#itemBtn").click(function(event) {
    var item = $(event.target).html();
    item = $(event.target).html("Undo");
    //Change color
    //Option 1
    //item = $(event.target).css("background-color", "red");
    //item = $(event.target).css("border", "red");
    //Option 2
    item = $(event.target).removeClass("btn-primary");
    item = $(event.target).addClass("btn-danger");

    //Item Name
    var itemName = $(".itemName").html();
    console.log(itemName);
    //listOfItems.push(itemName);
    //console.log(listOfItems);

    //Item Price
    var itemPrice = $(".itemPrice").html();
    itemPrice = parseFloat(itemPrice);
    console.log(itemPrice);
    totalPrice = totalPrice + itemPrice;
    console.log(totalPrice);

    var totalAmount = $("span#totalAmount");
    parseFloat(totalAmount);
    console.log(totalAmount);
    totalAmount = totalAmount.html(totalPrice);

  });

});
