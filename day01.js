function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Hello, Alice

//////////////////////////////////////////////////////

const greet3 = (name1) => "Hi" + name1;
console.log(greet3("Alice2"));

// Declares a variable for your name.
let name2 = "Sai Pavan Reddy";
console.log(name2);

//////////////////////////////////////////////////////

// Stores your age in another variable.
let age1 = 24;
console.log(age1);



// Uses a function to return a greeting based on your name and age.
function greet1(age2, name10){
    //return "age: "+ age2+ ", name: "+ name10; 
    return `age: ${age2}, name: ${name10}`;
}

console.log(greet1(25, "Sai"));


const greet4= (age3, name11) => `age3: ${age3}, name11: ${name11}`; 

// Logs it to the console.
console.log(greet4(11, 'SAIREDDY'));