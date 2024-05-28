// global scope
let say = "Hi"; 


// function scope
function sayHi(){
    let sayhi = "message";
    console.log(sayhi);
}


// block scope

{
    let sayHello = "message sent";
    console.log(sayHello);
}

console.log(say);
sayHi();