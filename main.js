var body = document.querySelector("body");
var darkbtn = document.querySelector(".changemode");
function changemode(){
    body.classList.toggle("dark");
}

darkbtn.onclick = changemode; 




