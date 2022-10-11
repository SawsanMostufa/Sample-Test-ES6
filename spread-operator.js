//////////spread operator/////////
var arr = [1,2,3];
var arr2 = [4,5,6,7];
//shallow copy
var newCopy = [];
newCopy.push(arr[0]);
newCopy.push(arr[1]);
newCopy.push(arr[2]);

//deep copy
var newCopy = [...arr];
arr[0] = "hamada";
console.log(newCopy);
console.log(Math.max(...arr2));//function callling
function test(x,y,z){
    return x+y+z;
}
test(...arr);
var arr3 = [...arr,"menna",...arr2]//[1,2,3,"menna",4,5,6]  
console.log(arr3);



