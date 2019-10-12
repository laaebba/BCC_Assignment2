var temp = prompt ("Enter temperature");

if ((temp*1) >= 40){
    alert("It's too hot outside");
}
else if ((temp*1) >= 30 && (temp*1) < 40){
    alert("The weather today is Normal");
}
else if ((temp*1) >= 20 && (temp*1)<30){
    alert("Today's weather is cool!");
}
else if ((temp*1) >= 10 && (temp*1)<20){
    alert("OMG! Today's weather is so cool!");
}
else ("Temperature out of range");