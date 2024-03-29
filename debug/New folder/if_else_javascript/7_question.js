// 7. Check if a year is leap year or not

let year = 2024;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) 
{
    document.write(year + " is a leap year.");
} else {
    document.write(year + " is not a leap year.");
}

