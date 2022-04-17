// 19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
const myPenguin = {
    name: 'Pablo',
    origin: 'The Backyardigans',
    creator: 'Janice Burgess'

}

// 20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}`)

// 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above. Do this step in a separate line of code.)
myPenguin.canFly = false
console.log(myPenguin.canFly)

// 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code. Do this step by writing a new line of code.)
// Hint: a function is called a "method" when it's inside an object.
// myPenguin.chirp = "CHIRP CHIRP! Is this what penguins sound like?"
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?")
}; 
// TO TEST IT, RUN THIS CODE: myPenguin.chirp();
myPenguin.chirp();

// 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. This time, be sure to use the "this" keyword to access your penguin's name, so that way if you change its name later, your method still works.
// myPenguin.sayHello = `Hello, I'm a penguin and my name is ${myPenguin.name}`
myPenguin.sayHello = function() {
    console.log(`Hello, I'm a penguin and my name is ${this.name}`)
}

// 24. Next, call your penguin's sayHello() method and make sure that it works. (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object.)
// console.log(myPenguin.sayHello);
myPenguin.sayHello();

// 25. Without modifying any of your previous code, change the penguin's name to "chungus" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.name = "chungus"
myPenguin.sayHello();

// 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = function() {
    if (this.canFly) {
        console.log("I can fly!");
    } else {
        console.log("No flying for me!")
    }
};

myPenguin.fly();

// //try #1
// var canIFly = function(canFly) {
//     if (canFly === true) {
//         return "I can fly"
//     }
//     else {
//         return "No flying for me!"
//     }
// }

// myPenguin.fly = canIFly;
// console.log(myPenguin.fly)

// //try #2
// let canFly = false;
// let result;
//     if (canFly === true) {
//         result = "I can fly!"
//     } else {
//         result = "No flying for me!"
//     }
//     return result
// myPenguin.fly = result

// myPenguin.fly = result
// console.log(myPenguin.fly)//not right logs nothing

// //try #3
// function someFunction() {
//     if (canFly === true) {
//         return "I can fly!"
//     } else {
//         return "No flying for me!"
//     }
// }
// myPenguin.fly = someFunction;

// console.log(myPenguin.fly) //not right (logging "[Function: someFunction]")


// 27. Call your penguin's fly() method and make sure it works.
myPenguin.fly();
// 28. Change the canFly property to true -- again, without modifying any of your previous code.
myPenguin.canFly = true;
// 29. Now call your penguin's fly() method again and make sure it works as expected.
myPenguin.fly();
// 30. Write a for ... in loop to print each key to the console.

// 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation.)
