var secret = 8;
 userIn = prompt("Enter a guess number");

 if ((userIn*1) == secret){
     alert("Bingo! Correct Answer");
 }
else if (((userIn*1)+1) == (secret)){
    alert("Close Enough to correct answer");
}
else alert("Your Guess was incorrect :(");