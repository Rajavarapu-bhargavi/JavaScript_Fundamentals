function pow(x,n){
    let expo=x;
    for(let i=1;i<n;i++){
        expo=expo*x;
    }
    alert(expo);
}
let x=prompt('x?','1');
let n=prompt('n?','');
if(n<1){
    alert(`${n} is not supported,use a positive integer`);
}
else{
    pow(x,n);
}