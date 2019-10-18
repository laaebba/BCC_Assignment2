var pass = "Password123";
label: 
while(true){
userPass = prompt("Enter Password");
if ( userPass == null || userPass == "") {
    alert("Please Enter Password");
    continue label;
}
if (userPass == pass){
    alert("Entered Password matches the original password"); break;
}
else if(userPass != pass) {
    alert("Incorrect Password"); break;
}
}
