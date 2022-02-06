// problem 2
// function 
function pandaCost(singaraQuantity, shomuchaQuantity, jilapiQuantity) {
// Prices 
    var perSingaraPrice = 7;
    var perShomuchaPrice = 10;
    var perJilapiPrice = 15;
// Error handle 
    if (typeof singaraQuantity != "number" || typeof shomuchaQuantity != "number" || typeof jilapiQuantity != "number") {
        return "please give a vallid number";
    }
    if (singaraQuantity < 0 || shomuchaQuantity < 0 || jilapiQuantity < 0) {
        return "please enter positive input";

    }

    else {

        singaraQuantity = singaraQuantity * perSingaraPrice;
        shomuchaQuantity = shomuchaQuantity * perShomuchaPrice;
        jilapiQuantity = jilapiQuantity * perJilapiPrice;

        var totalPrice = singaraQuantity + shomuchaQuantity + jilapiQuantity;
        return totalPrice;
    }
}

var myTotalPrice = pandaCost(10, 10, 10);
console.log(myTotalPrice); 