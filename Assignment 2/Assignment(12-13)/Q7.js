var time= prompt("Enter ime in 24 hrs format (e:g 1900)");
cTime = time*1;

if (cTime>= 0000 && cTime< 1200){
    alert("Good Morning!");
}
else if (cTime>=1200 && cTime<1700){
    alert("Good Afternoon!");
}
else if (cTime>=1700 && cTime<2100){
    alert("Good Evening!");
}
else if (cTime>=2100 && cTime<2359){
    alert("Good Night!");
}
