let heading = document.getElementById("file");
let input = document.getElementById("hello");
let para = document.getElementById("para");
let changeHeadingbtn = document.getElementById("heading change");
let changebgbtn = document.getElementById("Background Change");
let increasefontbtn = document.getElementById("font size increase");
let hidebtn = document.getElementById("show/hide");
let resetbtn = document.getElementById("Reset");
changeHeadingbtn.onclick = function () {
    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter some text!");
    }
};
changebgbtn.onclick = function () {
    document.body.style.backgroundColor = "green";
};
increasefontbtn.onclick = function () {
    para.style.fontSize = "25px";
};
hidebtn.onclick = function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
};
resetbtn.onclick = function () {
    heading.innerText = "Welcome to the JavaScript";
    document.body.style.backgroundColor = "white";
    para.style.fontSize = "16px";
    para.style.display = "block";
    input.value = "";
};