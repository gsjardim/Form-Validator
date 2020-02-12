/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validateForm(){
                var arrayOfElements = document.getElementsByTagName("input");
                 
                var isValid = true;
                var orderTotal = 0;
                for (var k=0; k<5; k++){
                    if (arrayOfElements[k].value===""){
                        alert(arrayOfElements[k].name + " cannot be null");
                        isValid = false;
                    }
                }
                
                if (document.getElementById("postalCode").value.length < 6){
                    alert("Postal Code must have at least 6 digits");
                    isValid = false;
                }
                var widget = [document.getElementById("widget1qty"),
                              document.getElementById("widget2qty"),
                              document.getElementById("widget3qty")];
                var numOrders = 0;
                for (var w=0; w<widget.length; w++){
                    if (parseFloat(widget[w].value) < 0) {
                        alert (widget[w].name + " must be equal or greater than 0!");
                        isValid = false;
                    }
                    if (parseFloat(widget[w].value) > 0) numOrders++;
                  }
                if (numOrders<2) {
                    alert ("You must order at least two types of Widgets!");
                    isValid = false;
                }
                if (document.getElementById("shippingTypeStandard").checked) orderTotal += 5;
                if (document.getElementById("shippingTypeExpress").checked) orderTotal += 10;
                if (document.getElementById("shippingTypeOvernight").checked) orderTotal += 20;
                
                if (isValid===true){
                    orderTotal += parseFloat(widget[0].value)*5 + parseFloat(widget[1].value)*15 + parseFloat(widget[2].value)*25;
                    alert("Your total is: " +orderTotal);
                 }
                return isValid;
            }