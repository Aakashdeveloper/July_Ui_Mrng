switch(10*10){
    case 100:
        console.log('number is multiplied')
        break;
    case "1010":
        console.log("number is concatinated")
        break;
    default:
        console.log('This is default')
        break;
}

Date()
"Fri Aug 16 2019 02:42:36 GMT+0100 (British Summer Time)"
new Date()
Fri Aug 16 2019 02:42:44 GMT+0100 (British Summer Time)
Date().getDay()
new Date().getDay()
5

switch(new Date().getDay()){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
    default:
        console.log('Its Sunday')
        break;
}