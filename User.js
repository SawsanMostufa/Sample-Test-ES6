
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

var x =10;
console.log(x);
// var u = new User("menna",25);
// console.log(u);
// var emp = new Empl
////////////modules////////////////