// forEach can take value, index, itSelf

const info = ['shakil', 'khushi', 'rokeya', 'fatema', 'armin', 'jorina'];

info.forEach(personInfo)

function personInfo(value, index, itSelf){
    // console.log(itSelf);
}


// array map can take value, index, itSelt but if you want not use index, itSelf. no problem for it.
const number = [2, 4, 6, 8, 10];

const number2 = number.map(function(value, index, itSelf){
    return value * 5;
});

// console.log(number);
// console.log(number2);


// array flatMap
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x, idx) => x * 3);

// console.log(myArr);
// console.log(newArr);



// array filter
let myFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const Fresh = myFilter.filter(filterFun);

// function filterFun(value){
//     return value > 5;
// }



// other ways
const Fresh = myFilter.filter(function filterFun(value){
    return value > 5;
});

// console.log(Fresh);
