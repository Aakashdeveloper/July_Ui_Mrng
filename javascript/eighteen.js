// Es5
function language(name, country){
    this.name = name;
    this.country = country;
}


var hindi = new language('Hinid', 'India');


// Es6
class language1 {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
}

var english = new language1('English', 'India')


class geo extends language1{
    constructor(continent, name, country){

        this.continent = continent
    }
}


var India = new geo('Asia', 'Hindi', 'India' )