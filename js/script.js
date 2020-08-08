function aboutLink() {
    var x = document.getElementById("about");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("contact").style.display = "none";
}

function contactLink() {
    var y = document.getElementById("contact");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    document.getElementById("about").style.display = "none";
}