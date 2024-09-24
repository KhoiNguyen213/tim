let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.onclick = function () {
  alert("Error, the button can't run");
};

btn2.addEventListener("click", function () {
  window.location = "/final.html";
});
