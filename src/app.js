document.addEventListener("DOMContentLoaded", () =>
  console.log("App chargee")
);
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let result =
    op === "add" ? addNumbers(num1, num2) : subtractNumbers(num1, num2);
  document.getElementById("result").innerHTML = `Resultat : ${result}`;
}
