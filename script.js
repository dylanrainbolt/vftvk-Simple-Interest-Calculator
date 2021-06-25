function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

function compute(){
  var p = document.getElementById("principal").value;
  //alert(p)
  var r = document.getElementById("rate").value;
  //alert(r)
  var y = document.getElementById("years").value;
  var i = p * (r / 100) * y
  var message = "If you invest $" + p.toString() + "\nAt a rate of " + r.toString() + "%\nYou will recieve an amount of $" + i.toString() + " in year " + y.toString() + ".";
  document.getElementById("result").innerHTML = message.toString();
}
        
