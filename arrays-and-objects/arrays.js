// 7. Create an array named colors that contains five different names of colors as strings.
var colors = ["green", "blue", "red", "yellow", "purple"]


// 8. Access the first color in the array and print it to the console using console.log()
    // const index = colors.findIndex(color => color === "green")
    // console.log(colors[index])
console.log(colors[0])

// 9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
    // const index1 = colors.findIndex(color => color === "red")
    // console.log(colors[index1])
console.log(colors[2])

// 10. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors.splice(4,1,"ultraviolet")
console.log(colors)

// 11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
var fourthColor = colors[3]
console.log(fourthColor)

// 12. Add another color to the end of the list.
const count = colors.push("orange")
console.log(colors)

// 13. Add another color to the beginning of the list.
colors.splice(0,0,"black")
console.log(colors)

// 14. Print the length of the array to the console with console.log()
console.log(colors.length)//7 because of the new one we just added to the begining & end

// 15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop()
console.log(colors.length)

// 16. Write a for loop to iterate through every color in the array and print each color's value to the console.
// const iterator = colors.values()
// for (const value of iterator) {
//     console.log(value)
// }
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: "3, purple" or "0, blue" etc.
colors.forEach(function(color, index, colors){
    console.log(`${index}, ${color}`)
})// doesn't show one of the colors that I pushed to the array

// 18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
var lastColor = colors.slice(-1)
console.log(lastColor) //again doesnt show "orange" but it only shows the one time i pushed and logged it 