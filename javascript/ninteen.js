var person = {
    fullName: function(){
        return this.firstname+" "+this.lastname
    }
}


var person1 = {
    firstname:"John",
    lastname:"Alis"
}

person.fullName.call(person1)


//////////////
var person = {
    fullName: function(city, country){
        return this.firstname+" "+this.lastname+" city is "+city+" country is "+country
    }
}


var person1 = {
    firstname:"John",
    lastname:"Alis"
}

person.fullName.apply(person1, ['London', 'England'])