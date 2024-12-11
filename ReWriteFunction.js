function checkAge(age){
    return(age>18)?true:confirm('Do you have permission');
}
checkAge(15);
function checkAge(age){
    return(age>18)||confirm('Do you have permission');
}
checkAge(10);