//Es5
String
Number 
Boolean

var a = "amsterdam"
var b = "10"
var c = "true"
var d = 787
var e = 878.8765
var f = true
var g = true

var a = "amsterdam"
undefined
a
"amsterdam"
typeof(a)
"string"
var b = "10"
undefined
typeof(b)
"string"
var c ="true"
undefined
typeof(c)
"string"
var c = 10
undefined
typeof(c)
"number"
var c = 10.23
undefined
typeof(c)
"number"
var c = true
undefined
typeof(c)
"boolean"
var c = false
undefined
typeof(c)
"boolean"
/*******************
 * Operators in JS
 */

var a = 10
undefined
var b = 20
undefined
a+b
30
a-b
-10
b-a
10
a*b
200
a/b
0.5

** + operater with number will be addition 
** + operater with string will be concat


var a = "London-"
undefined
var b = "England"
undefined
a+b
"London-England"
a-b
NaN
a*b
NaN
a/b
NaN

String+Number = String
Number+String=String
Number+Number = Number
String+String=String


10+10+"10" = 2010
"10"+10+10 = 101010
10+"10"+10 = 101010

10+true+"10" = 1110
true+"10"+10 = true1010
true+false= 10/ 1
false+true= 1


10/2
5
10%2
0
11/2
5.5
11%2
1


20/3
2

30/4

5/3
1.6666666666666667
5%3
2
3%5
3
4%2
0
2%4
2
7%8
7
8%7
1
2%2
0
3%2
1
2%3
2
3%4
3
/*************
 * 
 */
var a = "hii"
undefined
console.log(a)
VM1217:1 hii
undefined
alert(a)
undefined

confirm('Do you want to leave')
true
confirm('Do you want to leave')
false
var result = confirm('Do you want to leave')
undefined
result
true
var result = confirm('Do you want to leave')
undefined
result
false
prompt("What is your name")
"Aakash"
var name = prompt("What is your name")
undefined
name
"aakash"
var name = prompt("What is your name")
undefined
name
"null"