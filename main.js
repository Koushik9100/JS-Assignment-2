
var iseven = num => num%2 === 0;

console.log(iseven(2));

var small = function(a,b) {
    if(a>b){
        console.log(b);
    }
    else{
        console.log(a);
    }
}
console.log(small(10,4));



var sign = function(number) {
    if(number>0)
    {
        console.log('positive');
    }
    else if(number<0)
    {
        console.log('negative');
    }
    else {
        console.log('zero');
    }
}
console.log(sign(10));
console.log(sign(-1));
console.log(sign(0));



var ispalindrome = function(str){
    let l = str.length;
    let str1 = '';
    for(var i=str.length-1;i>=0;i--)
    {
        str1=str1+str[i];
    }
    console.log(str1);
    if(str1===str)
    {
        return true;
    }
    else {
        return false;
    }
}
console.log(ispalindrome('pop'));//ture
console.log(ispalindrome('hello'));//flase