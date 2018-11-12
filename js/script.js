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
  var totalPrice = 0.00;

  $(".item").on("click", "button", function(event){
    var item = $(event.target);         //Button Being Clicked
    var itemBtnText = item.html();      //Button Text
    var itemName = $(event.target).parent().next().children(".itemName").html();  //Item Name
    //console.log(itemName);
    var itemPrice = $(event.target).parent().next().children().find("span.itemPrice").html(); //Item Price
    itemPrice = parseFloat(itemPrice);  //Item Price Turned into a number from a string.
    var totalAmount = $("span#totalAmount");  //Total Amount on priceBar

    /* Conditional
    The conditional is going to be based off of whether the Buttons Text says "Add" or "Undo"
    meaning if the Buttons Text says "Add" then
      1. Change the Buttons Text to "Undo"
      2. Change the Buttons Color to red by removing class "btn-primary" and adding class "btn-danger".
      3. Push the Items Name into the "listOfItems" array.
      4. Add Items Price to the Total Price
      5. Display that new total price on the price bar.

    Else - Do the opposite for numbers 1-5 above.
    */

    if( itemBtnText === "Add" ) {
      //Item Button
        item = $(event.target).html("Undo");
        item = $(event.target).removeClass("btn-primary");
        item = $(event.target).addClass("btn-danger");

      //Item Name
        //Pushes item thats clicked into listOfItems array
        listOfItems.push(itemName);

      //Item Price
        console.log(itemPrice);
        totalPrice = totalPrice + itemPrice;
        //totalPrice = parseFloat(totalPrice + itemPrice).toFixed(2);
        //totalPrice = parseFloat(totalPrice).toFixed(2);
        totalPrice = Number(totalPrice.toFixed(2));
        console.log(totalPrice);
        console.log(typeof totalPrice);
        totalAmount = totalAmount.html(totalPrice);

    }  else {
      //Item Button
        item = $(event.target).html("Add");
        item = $(event.target).removeClass("btn-danger");
        item = $(event.target).addClass("btn-primary");

      //Item Name
        //Pulls last item thats clicked into listOfItems array.
        listOfItems.pop(itemName);
        /*Problem:
            Going to have to think more complex about this meaning what if they click undo out of order.
          Example:
            User clicks add Apples then add Bananas but goes back to Apples and clicks undo?
            Problem: It would take Bananas off the list instead of Apples.
        */

      //Item Price
        //Subtracts items price from total amount.
        console.log(itemPrice);
        totalPrice = totalPrice - itemPrice;
        //totalPrice = parseFloat(totalPrice - itemPrice).toFixed(2);
        //totalPrice = parseFloat(totalPrice).toFixed(2);
        totalPrice = Number(totalPrice.toFixed(2));
        console.log(totalPrice);
        console.log(typeof totalPrice);
        totalAmount = totalAmount.html(totalPrice);
    }
    console.log(listOfItems);
  });

});
