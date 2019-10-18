var col = ["Pink", "Blue", "Red"];
console.log(col);

//A
var usrIn = prompt("Enter which color you want to add in the beggining");
col.unshift(usrIn)
console.log("Color added in the beginning: "+col);

// //B
var usrIn = prompt("Enter which color you want to add to the end");
col.push(usrIn);
console.log("Color added to the end: "+col);

//C
for (var i=0; i<2; i++){
var usrIn = prompt("Enter which color you want to add in the beggining");
col.unshift(usrIn)
}
console.log("Two new colors added: "+col);

// //D
col.shift();
console.log("First Element Removed: "+col);

//E
col.pop();
console.log("Last Element Removed: "+col);

//F
var usrIndex = prompt("Enter at which index you want to add color to");
var item = prompt("Enter the color name");
col.splice(usrIndex, 0, item); 
console.log("Element added to specific Index: "+col);


//G
var usrIndex = prompt("Enter at which index you want to remove color from");
var howMany = prompt("Enter at how many colors you want to remove");
parseInt(usrIndex,10);
parseInt(howMany,10);

var removed = col.splice(usrIndex,howMany);
console.log("Element removed at specific Index: "+col);


