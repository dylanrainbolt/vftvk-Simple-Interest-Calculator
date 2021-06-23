function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    y= document.getElementById("years").value;
    i= p*(r/100)*y
    document.getElementById("result").innerHTML= parseFloat((i).toFixed(2)).toString();
}
var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value+ "%";

slider.oninput = function() {
  output.innerHTML = this.value+"%";
}
        
