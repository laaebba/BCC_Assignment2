var std = ["Laaebba", "Mahnoor", "Rida"];
var mrks = [400, 450, 455];
var total = 500;

for(var i=0; i<std.length; i++){
    var Percentage = (mrks[i]/total)*100;
    console.log("Score of "+std[i]+ " is "+ mrks[i]+ " Percentage is "+Percentage+"%");
}
