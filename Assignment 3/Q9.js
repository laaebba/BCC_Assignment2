var arr = [24,53,78,91,12];
var large = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i]> large){
        large = arr[i];
    }
   else break;
}
console.log("Largest number is: "+(large));