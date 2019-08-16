for(i=0;i<10;i++){
    console.log(i)
}

var color= ["red", "blue", "purple"];
for(i=0;i<color.length;i++){
    console.log(color[i])
}

i = 0  ; i < 3 ;i++   => red
i = 1  ; i < 3 ;i++   => blue 
i =2   ; i < 3 ;i++   => purple
i =3  

var color= ["red", "blue", "purple"];
for(i=0;i<color.length;i++){
    console.log(color[i])
}

var marks = [32,46,64,23,34,12,56]
for (i=0; i<marks.length; i++){
    if(marks[i] <33){
        console.log('You are fail with marks '+ marks[i])
    } else{
        console.log('You are pass with marks '+ marks[i])
    }
}

localStorage.setItem('marks',[32,46,64,23,34,12,56])
localStorage.removeItem('marks')
localStorage.setItem('marks',[32,46,64,23,34,12,56])
undefined
localStorage.removeItem('marks')
undefined

localStorage.setItem('marks',[32,46,64,23,34,12,56])
undefined

localStorage.getItem('marks')
"32,46,64,23,34,12,56"


you have to take on blank Array
and need to take input from as username and save 
username in array.
Check if username already exist than say take any othername
else add in array and print welcome meaasgae with username 