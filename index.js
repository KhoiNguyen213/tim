let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  window.location = "/how.html";
});

btn.onclick = function () {
  alert("last warning, you can't comeback if you click button");
};
