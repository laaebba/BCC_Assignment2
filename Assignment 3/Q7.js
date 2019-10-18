var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};
var c = b.concat(a).unique(); 
console.log(c);
