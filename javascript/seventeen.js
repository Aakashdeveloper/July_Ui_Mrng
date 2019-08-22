function robot(name){
    this.name = name;
    this.legs = 2;
    this.color= "White"
}


function human(name){
    this.name = name;
    this.hands = 2
}

// var andrew = new human('Andrew')

human.prototype = new robot();
robot.prototype = new human();

var pepper = new robot('Pepper');
var andrew1 = new human('Andrew')