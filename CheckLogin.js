let visitor=prompt('enter the visior name?','');
if(visitor==='Admin'){
    let password=prompt('enter the password','');
    if(password==='TheMaster'){
        alert('Welcome');
    }
    else if(password==' ' || password==null){
        alert('Canceeld');
    }
    else{
        alert('Wrong password');
    }
}
else if(visitor==' ' || password==null){
    alert('Canceled');
}
else{
    alert(`I don't know you`);
}