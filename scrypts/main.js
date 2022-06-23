let leftSide = document.getElementById("leftSide");
let content = document.getElementById("content");
let rightSide = document.getElementById("rightSide");


function openLeftSide() {
    leftSide.style.width = "50vw";
    leftSide.style.padding = "20px";
    rightSide.style.width = "0px";
    rightSide.style.padding = "0px";
}

function openRightSide() {
    rightSide.style.width = "60vw";
    rightSide.style.padding = "20px"
    leftSide.style.width = "0px";
    leftSide.style.padding = "0px";
}

function closeSides() {
    leftSide.style.width = "0px";
    rightSide.style.width = "0px";
    leftSide.style.padding = "0px";
    rightSide.style.padding = "0px";
}