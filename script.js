function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    y= document.getElementById("years").value;
    i= p*(r/100)*y
    curr_y= new Date.getFullYear()
    year= y+curr_y
    document.getElementById("result").innerHTML= "If you invest $"+ p+"\nAt a rate of "+r+"%\nYou will recieve an amount of $"+ parseFloat((i).toFixed(2)).toString()+" in year "+ year.toString()+".";
}
