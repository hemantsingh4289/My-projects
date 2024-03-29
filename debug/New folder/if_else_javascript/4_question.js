// 4. Check if a triangle is equilateral, scalene, or isosceles

let side1 = Number(prompt("Enter length of side 1:"));
let side2 = Number(prompt("Enter length of side 2:"));
let side3 = Number(prompt("Enter length of side 3:"));
if (side1 === side2 && side2 === side3) 
{
    document.write("THE TRIANGLE IS EQUILATERAL"); // All sides are equal
} 
else if (side1 !== side2 && side2 !== side3 && side1 !== side3) 
{
    document.write("THE TRIANGLE IS SCALENE"); // All sides are different
}
else
{
        document.write("THE TRIANGLE IS ISOSCELES");// Two sides are equal, one side is different
}
