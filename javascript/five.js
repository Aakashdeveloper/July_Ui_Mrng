var a= ['a','cfh','dtweq','423rgeg']
var b = [1,35,57,58,6,86,8]
var c = [true, true, false,false]

var d = [35,'fhdr',true, 46,45,'true',true]
var f = [1,2,34,56,78,90,11,12]
var f = [1,2,34,56,78,90,11,12]
undefined
f.length
8
f[3]
56
f[7]
12
f[8]
undefined
f[f.length-1]
12

pop remove from the end 
push add at the end
shift remove from the begining
unshift add at the begining

var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice
ƒ slice() { [native code] }
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice()
(5) ["London", "Newyork", "Delhi", "Sydeny", "amsterdam"]
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice(1)
(4) ["Newyork", "Delhi", "Sydeny", "amsterdam"]
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice()
(5) ["London", "Newyork", "Delhi", "Sydeny", "amsterdam"]
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice(1,5)
(4) ["Newyork", "Delhi", "Sydeny", "amsterdam"]
var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
city.slice(1,4)
(3) ["Newyork", "Delhi", "Sydeny"]

var city=['London', 'Newyork', 'Delhi', 'Sydeny', 'amsterdam']
undefined
city.splice(2,0,'oakland','Vancover')
[]
city
(7) ["London", "Newyork", "oakland", "Vancover", "Delhi", "Sydeny", "amsterdam"]
city.splice(4,2,'helsinki','mumbai')
(2) ["Delhi", "Sydeny"]
city
(7) ["London", "Newyork", "oakland", "Vancover", "helsinki", "mumbai", "amsterdam"]
var city = ["London", "Newyork", "oakland", "Vancover", "helsinki", "mumbai", "amsterdam"]
undefined
city.splice(2,4,'delhi')
(4) ["oakland", "Vancover", "helsinki", "mumbai"]
city
(4) ["London", "Newyork", "delhi", "amsterdam"]


var a,b;

[a,b] = [1,2]
(2) [1, 2]
a
1
b
2