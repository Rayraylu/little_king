function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    myDropdown.classList.toggle("show"); //現在是增加
    myDropdown.classList.toggle("show"); //現在是刪除
}
document.onclick = function() {
    document.getElementsById("myDropdown").style.display = "none";
}