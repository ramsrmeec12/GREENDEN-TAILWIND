var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


// search suggestion

var productcontainer = document.getElementById("productcontainer");
var search = document.getElementById("search");
var productList = productcontainer.querySelectorAll("div");


search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase().trim();

    for (var count = 0; count < productList.length; count++) {
        var productText = productList[count].textContent.toUpperCase();
        if (productText.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";

        } else {
            productList[count].style.display = "block";

        }
    }
});