
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
