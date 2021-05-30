/*
function dbFunction() {
    document.querySelector("launcher-bar-desktop > div > button");
}
*/
function dashboard() {
    document.getElementById("myDB").classList.toggle("show");
    myDB.classList.toggle("show"); //現在是增加
    myDB.classlist.toggle("show"); //現在是刪除
}

document.onclick = function() {
    document.getElementsById("myDB").style.display = "none";
}