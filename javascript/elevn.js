//es5
function add(a,b){
    return a+b
}

add(1,2)

//Es6
const add = (a,b) => { return a+b }
add(1,2)

var    => redecalre and reassign
let    => cannot redecalre but reassign
const  => cannot redecalre nor reassign


///
// Function declaration
function add(a,b){
    return a+b
}

// Function expressions
var add = function(a,b){
    return a+b
}