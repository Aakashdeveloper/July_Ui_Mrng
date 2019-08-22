var car = { 
    color: 'red',
    brand: 'BMW'
}

var car = { 
    color: 'red',
    brand: 'BMW'
}
undefined
typeof(car)
"object"
car
{color: "red", brand: "BMW"}
car.color
"red"
car.brand
"BMW"
car.engine="W8"
"W8"
car
{color: "red", brand: "BMW", engine: "W8"}
car.color="gray"
"gray"
car
{color: "gray", brand: "BMW", engine: "W8"}
delete car.brand
true
car 
{color: "gray", engine: "W8"}
delete car.brand
true
delete car.name
true
car 
{color: "gray", engine: "W8"}
car['color']
"gray"




var cars =[
    {color:'red',brand:'BMW', price:7676786},
    {color:'green',brand:'Merc', price:756776},
    {color:'gray',brand:'Audi', price:435435}
]


var car = {color:'red',brand:'BMW', price:7676786}
var out = [];
for(a in car){
    console.log(a)
    out.push(car[a])
}

var car = {color:'red',brand:'BMW', price:7676786}
var out = [];
for(a in car){
    out.push(car[a])
}
    
3
out
(3) ["red", "BMW", 7676786]
Object.keys(car)
(3) ["color", "brand", "price"]0: "color"1: "brand"2: "price"length: 3__proto__: Array(0)
    
/////////////
Constructor


var country = new Object();
country.name= "India";
country.capital = "Delhi",
country.population = 87678676767223