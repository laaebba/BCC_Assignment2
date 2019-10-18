var arr=[20,53,78,4,91,12];

var temp;
for(var k=0; k<arr.length; k++){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
        temp = arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
       }
   }
}
console.log(arr);
