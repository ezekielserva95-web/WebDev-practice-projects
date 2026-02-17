let display = document.getElementById("display");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");


calculate.onclick = function(){
  try {
    display.value = eval(display.value);
    display.textContent = display.value;
  } catch (error) {
    window.alert("Please Enter A Valid Number");
    console.log("Error! " + display.value + " is not a Number");
  }
}

reset.onclick = function(){
  display.value = " ";
}