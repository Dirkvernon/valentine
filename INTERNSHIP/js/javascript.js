function clicker() {
    document.getElementById("para").innerHTML = "clicked";
}

document.getElementById("divhover").addEventListener("mouseover", function () {
    document.getElementById("divhover").style.color = "white";
    document.getElementById("divhover").style.backgroundColor = "blue";
});

document.getElementById("divhover").addEventListener("mouseout", function () {
    document.getElementById("divhover").style.color = "black";
    document.getElementById("divhover").style.backgroundColor = "green";

});

document.getElementById("btn1").addEventListener("click", function () {
    if (document.getElementById("div1").style.display === "none") {
        document.getElementById("btn1").style.backgroundColor = "rgb(9, 90, 90)"
        document.getElementById("btn2").style.backgroundColor = "aqua"
        document.getElementById("btn3").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "block"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "none"
    } else {
        document.getElementById("btn1").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "none"
    }
});

document.getElementById("btn2").addEventListener("click", function () {
    if (document.getElementById("div2").style.display === "none") {
        document.getElementById("btn2").style.backgroundColor = "rgb(9, 90, 90)"
        document.getElementById("btn1").style.backgroundColor = "aqua"
        document.getElementById("btn3").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "block"
        document.getElementById("div3").style.display = "none"
    } else {
        document.getElementById("btn2").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "none"
    }
});

document.getElementById("btn3").addEventListener("click", function () {
    if (document.getElementById("div3").style.display === "none") {
        document.getElementById("btn3").style.backgroundColor = "rgb(9, 90, 90)"
        document.getElementById("btn1").style.backgroundColor = "aqua"
        document.getElementById("btn2").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "block"
    } else {
        document.getElementById("btn3").style.backgroundColor = "aqua"
        document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "none"
    }
});