// 19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
const myPenguin = {
  character: "Tux",
  origin: "Linux",
  notes: "He is the mascot of the Linux kernel and appears in many other Linux programs, usually in different styles. He has also appeared in his own video games, such as Tux Racer, Extreme Tux Racer, Tux Math Scrabble, TuxWordSmith, Tux Math, SuperTux, SuperTuxKart, and Tux Paint."
};

// 20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log(`Hello, I'm a penguin and my name is ${myPenguin.character}!`);

// 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above. Do this step in a separate line of code.)
myPenguin.canFly = false;

// 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code. Do this step by writing a new line of code.)
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
};
// TO TEST IT, RUN THIS CODE: myPenguin.chirp();

// 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. This time, be sure to use the "this" keyword to access your penguin's name, so that way if you change its name later, your method still works.
myPenguin.sayHello = function() {
  console.log(`Hello, I'm a penguin and my name is ${this.character}!`);
};

// 24. Next, call your penguin's sayHello() method and make sure that it works. (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object.)
myPenguin.sayHello();

// 25. Without modifying any of your previous code, change the penguin's name to "chungus" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.character = "Penguin McPenguinFace";
myPenguin.sayHello();

// 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = function() {
  if (this.canFly) {
    console.log("I can fly!");
  } else {
    console.log("No flying for me!");
  }
};

// 27. Call your penguin's fly() method and make sure it works.
myPenguin.fly();

// 28. Change the canFly property to true -- again, without modifying any of your previous code.
myPenguin.canFly = true;

// 29. Now call your penguin's fly() method again and make sure it works as expected.
myPenguin.fly();

// 30. Write a for ... in loop to print each key to the console.
for (property in myPenguin) {
  console.log(property);
}

// 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation.)
for (property in myPenguin) {
  console.log(myPenguin[property]);
}
