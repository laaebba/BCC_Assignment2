first = prompt("Enter First Number");
sec = prompt("Enter Second Number");
op = prompt ("Choose operation (+, - , / ,*, %)");

var res;
if (op == "+"){
    var res= (first*1)+(sec*1);
    alert("Your result is "+res); 
}
else if (op == "-"){
    var res= (first*1)-(sec*1);
    alert("Your result is "+res); 
}
else if (op == "/"){
    var res= (first*1)/(sec*1);
    alert("Your result is "+res); 
}
else if (op == "*"){
    var res= (first*1)*(sec*1);
    alert("Your result is "+res); 
}
else if (op == "%"){
    var res= (first*1)%(sec*1);
    alert("Your result is "+res); 
}

else alert("Invalid operator");