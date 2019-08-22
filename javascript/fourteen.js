var marks = [ 4,6,8,9,15,25]
marks.map(Math.sqrt)


marks.map((a) => { return a*2})

//////////////////////////////
var ages = [34,35,18,23,27]

/*function checkNumber(num){
    return num >= 25
}
*/

var checkNumber = (num) => {  return num >= 25 }

ages.filter((num) => {  return num >= 25 })


////////////////////////
var marks = [0,1,2,3,4]

marks.map((a) => { return a * 2})
[0,2,4,6,8]
marks.filter((a) => { return a * 2})
[1,2,3,4]


var first = [1,2,3,4]
var second = ['a','b',...first,'c','d']

var num = [2,3,6,7,3,1]
var min = Math.min(...num)

var name="john";
var out = [...name]



function add(a,b){
    return a+b
}

const add = (a,b) => { return a+b }


add(1,2)