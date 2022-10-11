// var i = 10;
// for(let i=0;i<5;i++){
//     console.log(i);//0 1 2 3 4 
// }
// console.log(i);//10
//////////////////
// var i= 5;
// let i = 10;
// console.log(i);

// let y = 5;
// y = 20;
/////////////////
//hoisting
//var x;
// console.log(x);//
//  let x = 10;
//shadowing
// var msg;
// function test(){
//     //hoisting var msg;
//     console.log(msg);//
//     let msg = "hello";
// }
// test();
// msg = "hi";

// const i=10;
// console.log(i);

// const obj = {
//     name:"menna",
//     age:25
// }
// // obj=5
// obj.name = "hamada";
// console.log(obj);

/////////////////////////
// var s = "menna";
// console.log(s.startsWith("m"));
// console.log(s.endsWith("A"));
// console.log(s.includes("n"));
// let name = "menna"
// function test(){
//     return 52;
// }
// var msg = `my name is ${10+20} ${name} ${test()} `

// var person = {
//     name:"hamada",
//     age:25,
//     print: function(){
//         console.log(this);
//        // console.log(this.name,this.age);
//     //    var self = this;//person
//         window.setTimeout(()=>{
//             console.log(this.name,this.age);
//         },1000);
//     }
// }

// person.print();
/////////////////////////////////////////////
///destructing////////////
// var arr = [20,"menna",100];
// // var v1 = arr[0];
// // var v2 = arr[1];
// // var v3 = arr[2];
// var x = 200;
// var [,v2,v3] = [20,x,100];
// console.log(v2,v3);

// var x;
// var obj = {
//     name:"menna",
//     age:25
// }
// // var n = obj.name;
// // var age = obj.age;
// let {age,name:n} = obj;
// console.log(age);

///////////spread operator/////////
var arr = [1,2,3];
var arr2 = [4,5,6,7];
//shallow copy
// var newCopy = [];
// newCopy.push(arr[0]);
// newCopy.push(arr[1]);
// newCopy.push(arr[2]);
//deep copy
// var newCopy = [...arr];
// arr[0] = "hamada";
// console.log(newCopy);
// console.log(Math.max(...arr2));//function callling
// function test(x,y,z){
//     return x+y+z;
// }
// test(...arr);
// var arr3 = [...arr,"menna",...arr2]//[1,2,3,"menna",4,5,6]  
// console.log(arr3);




///rest parameters//////////////function body params

// function test(x,...params){
//     console.log(params);
//     console.log(x);
//        // console.log(arguments);
// }

// test(1,2,30);
// test(10,30,"menna");
/////////////////////////////
//array methods/////////
// var arr = [1995,1992,2000,2010];
// // var res = arr.filter(el=> el>1996);
// // var res = arr.find(el=>el>1996);
// // var res = arr.findIndex(el=> el>1996);
// // var res = arr.map(function(el){
// //         // console.log("hello");
// //         return el;
// // })
// var res = arr.every(function(el){
//         return el>=1992;
// })

// console.log(emp);
// Employee.calcAge();



// console.log(res);
/////////////////////classess////////
  class User{
    constructor(name,age){
        if(this.constructor==User){
            throw("this is an abstract class");
        }
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name,this.age);
    }
}
export  class Employee extends User{
    constructor(name="notfound",age=0,salary=0){
        super(name,age);
        this.salary = salary;

    }
 

    clacSalary(){
        console.log(this.salary+2000);

    }
    static calcAge(){
        console.log("static function")
    }

}
var x =10;
console.log(x);
// var u = new User("menna",25);
// console.log(u);
// var emp = new Empl
////////////modules////////////////