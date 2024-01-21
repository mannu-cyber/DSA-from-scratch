function findMax(value1, value2, value3){

if(value1>value2 & value1>3){
    console.log(` ${value1} is greater than ${value2} and ${value3}`);
}


else if(value2>value1 & value2 >value3){
    console.log(` ${value2} is greater than ${value1} and ${value3}`);
}

else if(value3>value1 & value3>value2){
    console.log(` ${value3} is greater than ${value2} and ${value1}`);


}


else{
    console.log('all are equal')
}
}

findMax( prompt('enter the first value'), prompt('enter the second value'), prompt('enter the third value'))