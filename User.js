
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

