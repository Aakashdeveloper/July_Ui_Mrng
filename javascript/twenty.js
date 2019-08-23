function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(isNaN(a) == false && isNaN(b) == false ){
        if(opt  === "add"){
            out = parseInt(a)+parseInt(b);
        } else {
            out = parseInt(a)-parseInt(b);
        }
    } else{
        out = 'Please enter valid input'
    }
    

    document.getElementById('output').innerText = out;
}

/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    output = parseInt(a)+parseInt(b);
    document.getElementById('output').innerText = output;
}

function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    output = parseInt(a)-parseInt(b);
    document.getElementById('output').innerText = output;
}*/