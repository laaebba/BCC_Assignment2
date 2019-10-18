var count =1;
var count2= 10;
var arr1= [];
var arr2= [];
var arr3= [];
var arr4= [];
var arr5= [];

//Counting 
for(var i= 1; i<=15; i++){
n = count++;
arr1.push(n);
}
console.log("Counting: "+arr1);

//Rever Counting
for(var i= 1; i<=10; i++){
    n = count2--;
    arr2.push(n);
    }
    console.log("Reverse Counting: "+arr2);

//Even
for(var i= 0; i<=20; i++){
    if(i % 2 == 0)
    arr3.push(i);
    }
    console.log("Even: "+arr3);
        
//Odd
for(var i= 0; i<=20; i++){
    if(i % 2 !== 0)
    arr4.push(i);
    }
    console.log("Odd: "+arr4);

//Series      
for(var i= 1; i<=10; i++){
        arr5.push(i*2000);
        }
        console.log("Series: "+arr5);
                