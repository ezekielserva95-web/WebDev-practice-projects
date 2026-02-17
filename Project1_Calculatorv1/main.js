let display = document.getElementById("display");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");


calculate.onclick = function(){
  display.value = eval(display.value);
  display.textContent = display.value;
}


reset.onclick = function(){
  display.value = " ";
}