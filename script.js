function fun() {
    var cbx = document.getElementById("cb");
    var text = document.getElementById("text");
    var text1 = document.getElementById("text1");
    var body = document.body;

    if (cbx.checked) {
        body.style.backgroundColor = "black";
        text.style.color = "white";
        text1.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        text.style.color = "black";
        text1.style.color = "Black";
    }
}