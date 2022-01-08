function fn1(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fn1(num - 1);
  }
}
function fn() {
  var num = document.getElementById("number").value;
  var fact = fn1(num);
  document.getElementById("result").innerHTML =
    "The factorial of the number " + num + " is: " + fact;
}
