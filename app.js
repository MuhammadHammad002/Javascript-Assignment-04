//  Chap 14: Array

//  Q1
//  let studentName = [];

// Q2
// let studentNamesArray = {
//     names: []
// };

// Q3
// let stringsArray = ["SMIT", "Institute"];

// Q4
// let num = [5,7,8];

// Q5
// let boolean = [true , false];

// Q6
// let mixedArray = ["Hammad" , 20, true ];

// Q7
// let qualificationPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write( `<h1>Qualifications:</h1><br>1) ${qualificationPak[0]}<br>2) ${qualificationPak[1]}<br>3) ${qualificationPak[2]}<br>4) ${qualificationPak[3]}<br>5) ${qualificationPak[4]}<br>6) ${qualificationPak[5]}<br>7) ${qualificationPak[6]}<br>8) ${qualificationPak[7]}`) ;

// Q8
// let studentNames = ["Michael", "John", "Tony"];
// let studentScores = [];
// // Get scores for each student
// for (let i = 0; i < studentNames.length; i++) {
//     let score = +prompt(`Enter score for ${studentNames[i]} (out of 500):`);
//     studentScores.push(score);
// }
// // Display scores and percentages
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / 500) * 100;
//     console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, ${percentage.toFixed(2)}%`);
// }

// Q9

let colors = ["Red", "Green", "Blue"];

// Display the array elements
document.write("<h3>Initial Array:</h3>");
document.write(colors.join(", ") + "<br>");

// Ask the user for a color to add to the beginning
let colorToAddAtStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtStart);

// Display the updated array
document.write("<h3>After adding color to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// Ask the user for a color to add to the end
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// Display the updated array
document.write("<h3>After adding color to the end:</h3>");
document.write(colors.join(", ") + "<br>");

// Add two more colors to the beginning
colors.unshift("Yellow", "Orange");

// Display the updated array
document.write("<h3>After adding two more colors to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// Delete the first color in the array
colors.shift();

// Display the updated array
document.write("<h3>After deleting the first color:</h3>");
document.write(colors.join(", ") + "<br>");

// Delete the last color in the array
colors.pop();

// Display the updated array
document.write("<h3>After deleting the last color:</h3>");
document.write(colors.join(", ") + "<br>");

// Ask the user for the index and color to add
let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write("<h3>After adding a color at a specific index:</h3>");
document.write(colors.join(", ") + "<br>");

// Ask the user for the index and number of colors to delete
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write("<h3>After deleting color(s) at a specific index:</h3>");
document.write(colors.join(", ") + "<br>");



// Q10
// let studentScores = [320, 230, 480, 120];
// // Sort the array in ascending order
// studentScores.sort((a, b) => a - b);
// // Display the sorted array
// document.write("Ordered Scores of Students:", studentScores);



// Q11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// document.write(`Cities List:<br>${cities}<br> <br>Selected cities list:<br>${selectedCities}`);

// Q12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write(`<h1> Array: </h1> <br> ${arr} <br> <h1> String : </h1> <br> ${singleString} `);


// Q13 ,Q14
// let fifoArray = [];

// // Add values to the array
// fifoArray.push("first");
// fifoArray.push("second");
// fifoArray.push("third");

// // Remove values from the array in FIFO order
// let firstValue = fifoArray.shift();
// let secondValue = fifoArray.shift();
// let thirdValue = fifoArray.shift();

// console.log("First value:", firstValue);
// console.log("Second value:", secondValue);
// console.log("Third value:", thirdValue);

// Q15
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write(`<option value="${i}">${phoneManufacturers[i]}</option>`);
// }
// document.write("</select>");





