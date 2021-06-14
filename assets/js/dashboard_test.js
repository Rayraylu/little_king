/*
function dbFunction() {
    document.querySelector("launcher-bar-desktop > div > button");
}
*/
var dbcontent;
window.onload = function() {
    dbcontent = document.getElementById("dbcontent");
};

function dashboard() {
    if (dbcontent.style.display === "none") {
        dbcontent.style.display = "block";
    } else {
        dbcontent.style.display = "none";
    }
}


/*
function dashboard() {
    document.getElementById("myDB").classList.toggle("show");
    myDB.classList.toggle("show"); //現在是增加
    myDB.classlist.toggle("show"); //現在是刪除
}

document.onclick = function() {
    document.getElementsById("myDB").style.display = "none";
}
*/