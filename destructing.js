
var arr = [20,"menna",100];
// var v1 = arr[0];
// var v2 = arr[1];
// var v3 = arr[2];
var x = 200;
var [,v2,v3] = [20,x,100];
console.log(v2,v3);

var x;
var obj = {
    name:"menna",
    age:25
}
// var n = obj.name;
// var age = obj.age;
let {age,name:n} = obj;
console.log(age);