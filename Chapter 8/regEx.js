// Regular Expression
// let innocentText = "Please, subscribe innocent programmer";

// let innoSearch = innocentText.search("innocent programmer");



// search
// let innocentText = "Please, subscribe innocent programmer";

// let innoSearch = innocentText.search(/innocent/i);




// match and search
let innocentText = "Please, subscribe innocent programmer, innocent programmer is a high performance company, check innocent programmer website";

let innoSearch = innocentText.match(/innocent/ig);
// console.log(innoSearch);



// replace by string search keywords
// const innocentMama = innocentText.replace("innocent programmer", "innocent mama");



// replace /.../ig
const innocentMama = innocentText.replace(/innocent programmer/ig, "innocent mama");
console.log(innocentMama);
