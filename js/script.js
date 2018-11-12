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

  $(".item").on("click", "button", function(event){
  //Item Button - Add
    //console.log(event.target);
    var item = $(event.target); //button
    //console.log(item.html()); //Text of button
    item = $(event.target).html("Undo");
    item = $(event.target).removeClass("btn-primary");
    item = $(event.target).addClass("btn-danger");

  //Item Name
    var itemName = $(event.target).parent().next().children(".itemName").html();
    console.log(itemName);
    //Pushes item thats clicked into listOfItems array
    listOfItems.push(itemName);
    console.log(listOfItems);

  //Item Price
    var itemPrice = $(event.target).parent().next().children().find("span.itemPrice").html();
    itemPrice = parseFloat(itemPrice);
    console.log(itemPrice);
    totalPrice = totalPrice + itemPrice;

    var totalAmount = $("span#totalAmount");
    parseFloat(totalAmount);
    totalAmount = totalAmount.html(totalPrice);



  });

});
