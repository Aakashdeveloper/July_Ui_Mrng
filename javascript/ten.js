function isEven(a){
    var out = '';
    if(a%2 == 0){
        out = 'even'
    } else{
        out = 'odd'
    }

    return out
}

//clouser

function check(){
    var aaa = 10 
    var out = aaa +1
    return out
}


var extra = 2
function check(){
    var aaa = 10 
    var out = aaa +1 +extra
    return out

}

function printWel(name){
    var out = "Hi "+name+" Welcome to site"
    return out
}

mul(1,2,3)

function mul(a,b,c){
    var out = a*b*c;
    return out
}

mul(1,2,3)

mul(2)(2)(3)

function mul(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

//Hosting
var a = 10

var a;
a = 10


//////////
a = 10
b = 20

add(a,b)

function add(x,y){
    return x+y
}

var a;
var b;


var a;
var b;
a = 10
b = 20
function add(x,y){
    return x+y
}
add(a,b)



var a = []
var data = prompt('Please eneter your name')
if(a.indexof(data) == -1){
    a.push(data)
}