 A = prompt("Enter marks for subject A");
 B = prompt("Enter marks for subject B");
 C = prompt("Enter marks for subject C");
 Total = prompt("Enter Total Marks");

sum = (A*1) + (B*1) + (C*1);
var Percentage =  (sum/(Total*1))*100;
Percentage = Percentage.toFixed(1);

{
    var Grade;
    var Remarks;
if(Percentage >= 80){
    Grade = "A1";
    Remarks = "Excellent"
}
else if (Percentage>= 70 && Percentage<80){
    Grade = "A";
    Remarks = "Good"
}
else if (Percentage>= 60 && Percentage<70){
    Grade = "B";
    Remarks = "You need to improve"
}
else{
    Grade = "F";
    Remarks = "Sorry"
}

console.log ("MARKS SHEET\n", 
             "Total Marks: "+Total+"\n", 
             "Marks Obtained: "+sum+"\n",
             "Percentage: "+Percentage+"\n",
             "Grade: "+Grade+"\n",   
             "Remarks: "+Remarks+"\n"                 
            );
}