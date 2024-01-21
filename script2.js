var num1 = document.getElementById("tshirt-num");
var subtotal1 = document.getElementById("tshirt-subtotal1");
num1.addEventListener("input", function () {
        var quantity1 = parseInt(num1.value);
        if (quantity1 === 1) {
            subtotal1.innerHTML = "&#8377;600";
        } else if (quantity1 === 2) {
            subtotal1.innerHTML = "&#8377;1200";
        }
        else if (quantity1 === 0) {
            subtotal1.innerHTML = "&#8377;0";
        } else {
            subtotal1.innerHTML = "&#8377;1800";
        }
});
var num2 = document.getElementById("tshirt-num2");
var subtotal2 = document.getElementById("tshirt-subtotal2");
num2.addEventListener("input", function () {
    var quantity = parseInt(num2.value);
    if (quantity === 1) {
        subtotal2.innerHTML = "&#8377;699";
    } else if (quantity === 2) {
        subtotal2.innerHTML = "&#8377;1398";
    }
    else if (quantity === 0) {
        subtotal2.innerHTML = "&#8377;0";
    } else {
        subtotal2.innerHTML = "&#8377;2097";
    }
});
var num3 = document.getElementById("tshirt-num3");
var subtotal3 = document.getElementById("tshirt-subtotal3");

num3.addEventListener("input", function () {
    var quantity = parseInt(num3.value);
    if (quantity === 1) {
        subtotal3.innerHTML = "&#8377;899";
    } else if (quantity === 2) {
        subtotal3.innerHTML = "&#8377;1798";
    }
    else if (quantity === 0) {
        subtotal3.innerHTML = "&#8377;0";
        sub.innerHTML = "&#8377;0"
    } else {
        subtotal3.innerHTML = "&#8377;2697";
    }
});


var rem = document.getElementsByClassName("fa fa-times-circle");
for (var i = 0; i < rem.length; i++) {
    rem[i].addEventListener("click", function () {
        var parent = this.closest("tr");
        parent.parentNode.removeChild(parent);
    });
}
