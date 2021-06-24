function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}
function compute()
{
    var p = document.getElementById("principal").value;
    var r= document.getElementById("rate").value;
    var y= document.getElementById("years").value;
    var i= p*(r/100)*y
    document.getElementById("result").innerHTML= "If you invest $"+ p+"\nAt a rate of "+r+"%\nYou will recieve an amount of $"+ parseFloat((i).toFixed(2)).toString()+" in year "+ year.toString()+".";
}

        
