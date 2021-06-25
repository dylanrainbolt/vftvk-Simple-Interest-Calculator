function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

document.getElementById("comp_button").onclick = function() {
  var p = document.getElementById("principal").value;
  alert(p)
  var r = document.getElementById("rate").value;
  alert(r)
  var y = document.getElementById("years").value;
  var i = p * (r / 100) * y
  alert(i)
  var message = "If you invest $" + p.toString() + "\nAt a rate of " + r.toString() + "%\nYou will recieve an amount of $" + i.toString() + " in year " + y.toString() + ".";
  alert(message)
  document.getElementById("result").innerHTML = message.toString();
}
        
