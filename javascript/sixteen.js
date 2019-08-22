var bob = new Object();
bob.age = 10;
bob.color="white";
bob.setAge = function(newAge){
    bob.age = newAge
}


var tony = new Object();
tony.age = 10;
tony.color="white";
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.color="white";
bob.setAge = createAge


var tony = new Object();
tony.age = 10;
tony.color="white";
tony.setAge = createAge


function database(){
    this.add = function(a,b) { return a+b}
    this.sub = function(a,b) { return a-b}
    this.insert = function(table, name) { 
        console.log("Select * from "+table+" where student name is "+name)
    }
}


var sum = new database()
sum.add(1,2)
sum.insert('Student','John')