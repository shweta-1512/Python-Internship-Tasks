// ==========================================
// DAY 8 - JAVASCRIPT FUNDAMENTALS
// ==========================================


// 1. VARIABLES: var, let and const

console.log("1. VARIABLES");

var name = "Shweta";
let age = 21;
const course = "Computer Science";

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);


// 2. DATA TYPES

console.log("\n2. DATA TYPES");

let studentName = "Shweta";
let marks = 85;
let isPassed = true;
let result;

console.log("Name:", studentName);
console.log("Marks:", marks);
console.log("Passed:", isPassed);
console.log("Result:", result);

console.log(typeof studentName);
console.log(typeof marks);
console.log(typeof isPassed);


// 3. OPERATORS

console.log("\n3. OPERATORS");

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);


// 4. CONDITIONAL STATEMENTS

console.log("\n4. CONDITIONAL STATEMENTS");

let marksObtained = 75;

if (marksObtained >= 90) {
    console.log("Grade A");
} else if (marksObtained >= 75) {
    console.log("Grade B");
} else if (marksObtained >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 5. CHECK EVEN OR ODD

console.log("\n5. EVEN OR ODD");

let number = 7;

if (number % 2 === 0) {
    console.log(number, "is Even");
} else {
    console.log(number, "is Odd");
}


// 6. LOOPS: FOR LOOP

console.log("\n6. FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 7. WHILE LOOP

console.log("\n7. WHILE LOOP");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// 8. FUNCTIONS FOR BASIC CALCULATIONS

console.log("\n8. FUNCTIONS");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }

    return x / y;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


// 9. ARRAY OPERATIONS

console.log("\n9. ARRAYS");

let fruits = ["Apple", "Mango", "Banana"];

console.log("Original Array:", fruits);

// Add an element
fruits.push("Orange");
console.log("After push:", fruits);

// Remove the last element
fruits.pop();
console.log("After pop:", fruits);

// Access an element
console.log("First Fruit:", fruits[0]);

// Array length
console.log("Array Length:", fruits.length);


// 10. OBJECTS

console.log("\n10. OBJECTS");

let student = {
    name: "Shweta",
    age: 21,
    course: "Computer Science",
    marks: 85
};

console.log("Student Object:", student);

// Access object properties
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Course:", student.course);

// Update a property
student.marks = 90;
console.log("Updated Marks:", student.marks);

// Add a new property
student.city = "Pune";
console.log("Student City:", student.city);


// 11. SUM OF NUMBERS USING A LOOP

console.log("\n11. SUM OF NUMBERS");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum of numbers from 1 to 10:", sum);


// 12. FIND THE LARGEST NUMBER IN AN ARRAY

console.log("\n12. LARGEST NUMBER");

let numbers = [12, 45, 23, 67, 34];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Numbers:", numbers);
console.log("Largest Number:", largest);


// 13. MULTIPLICATION TABLE

console.log("\n13. MULTIPLICATION TABLE");

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// 14. CHECK POSITIVE, NEGATIVE OR ZERO

console.log("\n14. POSITIVE OR NEGATIVE");

let checkNumber = -5;

if (checkNumber > 0) {
    console.log("Positive Number");
} else if (checkNumber < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}


// 15. FUNCTION TO FIND SQUARE

console.log("\n15. SQUARE FUNCTION");

function square(n) {
    return n * n;
}

console.log("Square of 6:", square(6));


// ==========================================
// END OF DAY 8
// ==========================================

console.log("\nDay 8 JavaScript Programs Completed!");