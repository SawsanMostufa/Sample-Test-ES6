var msg = `my name is ${10+20} ${name} ${test()} `

var person = {
    name:"hamada",
    age:25,
    print: function(){
        console.log(this);
       // console.log(this.name,this.age);
    //    var self = this;//person
        window.setTimeout(()=>{
            console.log(this.name,this.age);
        },1000);
    }
}

person.print();
