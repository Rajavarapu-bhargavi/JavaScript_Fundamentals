let age=prompt('age?',18);
let welcome;
if(age>18){
    welcome=function(){
        alert('correct');
    };
}
else{
    welcome=function(){
        alert('wrong');
    };
}
welcome();
