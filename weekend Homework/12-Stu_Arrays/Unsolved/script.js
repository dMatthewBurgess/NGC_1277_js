// WRITE YOUR CODE HERE

var studentArray = ["Alice", "Bob", "Charles", "Donny", "Edwin", "Frank"]

console.log(studentArray.length);

console.log("Welcome to the class " + studentArray[0]);
console.log("Welcome to the class " + studentArray[1]);
console.log("Welcome to the class " + studentArray[2]);
console.log("Welcome to the class " + studentArray[3]);
console.log("Welcome to the class " + studentArray[4]);

studentArray[0] = "Zed";
console.log(studentArray);

if(studentArray[0] === "Zed") [
    console.log(studentArray[0] + " is in class!")
]