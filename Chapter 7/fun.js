function innocentFun(a, b, c) {
    // console.log(a, b, c);
}

innocentFun('innocent', 'programmer', 'coding run');


// returned value of function
function add(firstValue, secondValue, thereValue){
    return firstValue + ' ' + secondValue + ' ' + thereValue;
}

const returnValue  = add('innocent', 'programmer', 'coding run');
// console.log(returnValue);


function get(a, b){
    return a + b;
}

const getResult = get;
// console.log(getResult(30, 30));
// console.log(get(450, 430));



// nested multipy function
function i(a){
    function love(b){
        function coding(c){
            // console.log(a + b + c);
        }
        coding("Coding");
    }
    love("Love ")
}

i("i ");



// function as a parameter
function sum(a, b){
    return a + b;
}

const total = sum;

function count(a, b, fun){
    return fun(a, b) * 5;
}

const result = count(2, 3, total);

// console.log(result);



(
    function(){
        // console.log("I want learn coding");
    }
)()



const x = function(a, b){return a + b};
const y = function(a, b){return a * b};
const z = function(a, b){return a / b};

// console.log(x(20, 49));
// console.log(y(30, 19));
// console.log(z(66, 85));




// pass-by-values primitives values
function innocent(a){
    a = a * a;
    return a;
}

let b = 10;
const results = innocent(b);
// console.log(results);




// pass-by-values reference values
let person = {
    name: "shakil",
    age: 26
}

function increaseAge(obj){
    obj.name = 'Shakil Ahmed';
    obj.age += 1;
}

increaseAge(person);
// console.log(person);



// recursive function
function Hello(number){
    if(number === 0) return;
    // console.log(number);
    Hello(number - 1);
}

Hello(10);



// default parameter
function innocentMessage(message = "Hi, give me message"){
    console.log(message);
}

innocentMessage("Show, now are u free ?");