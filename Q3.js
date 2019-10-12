var sigColor = prompt("Enter Traffic signal color");

if(sigColor == "Red" || sigColor == "red"){
    alert("Must Stop");
}
else if (sigColor == "Yellow" || sigColor == "yellow"){
    alert("Ready to move");
}
else if (sigColor == "Green" || sigColor == "green"){
    alert("Move Now");
}
else ("Invalid input");
