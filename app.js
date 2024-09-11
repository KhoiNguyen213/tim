const one = document.getElementById("one");
const two = document.getElementById("two");

one.onmouseenter = function () {
  one.innerHTML = "Yes";
};
one.onmouseleave = function () {
  one.innerHTML = "No";
};
one.onclick = function () {
  alert("Thanks =))");
};
two.onclick = function () {
  alert("real??");
};
