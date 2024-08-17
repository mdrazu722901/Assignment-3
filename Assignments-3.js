function kilometerToMeter(num) {
    var convert = num * 1000;
    return convert;
}
var pussKilometer = kilometerToMeter(5);
console.log(pussKilometer);



function budgetCalculator(watch, phone, laptop) {
    var product1 = watch * 50;
    var product2 = phone * 100;
    var product3 = laptop * 500;
    var total = product1 + product2 + product3;
    return total;
}
var productPrice = budgetCalculator(1, 2, 3);
console.log(productPrice);




function hotelCost(days) {
    var totalDayPrice = 0;
    if (days <= 10) {
        totalDayPrice = days * 100;
    }
    else if (days <= 20) {
        var remainder = days - 10;
        var price2 = remainder * 80;
        var previceDay = 10 * 100;
        var result = previceDay + price2;
        totalDayPrice = result;
    }
    else {
        var remainder = days - 20;
        var price2 = remainder * 50;
        var pastTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var result = price2 + pastTenDay + secondTenDay;
        totalDayPrice = result;
    }
    return totalDayPrice;
}

var bookingDayPrice = hotelCost(22);
console.log(bookingDayPrice);



function megaFriend() {
    var bigName = '';
    for (var i = 0; i < nameArray.length; i++) {
        var elements = nameArray[i];
        if (elements.length > bigName.length) {
            bigName = elements;
        }
    }
    return bigName;
}

var nameArray = ["razu", "korim", "md rakib khan"];
var BigestName = megaFriend(nameArray);
console.log(BigestName);