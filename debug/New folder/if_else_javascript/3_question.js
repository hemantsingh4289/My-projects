//. Find the largest and smallest of three number
let i1 = Number(prompt("Input First number "));
let i2 = Number(prompt("Input Second number "));
let i3 = Number(prompt("Input Third number "));

if (i1 >= i2 && i1 >= i3) 
{
    document.write("number  " +i1  +" is large. ");
    if (i2 <= i3) 
    {
        document.write("number " +i2  +" is small. ");
    } 
    else 
    {
        document.write("number  " +i3  +" is small. ");
    }
} 
else if (i2 >= i1 && i2 >= i3) 
{
    document.write("number  " +i2  +" is large. ");
    if (i1 <= i3) 
    {
        document.write("number " +i1  +" is small. ");
    } 
    else
    {
        document.write("number " +i3  +" is small. ");
    }
} 
else if (i3 >= i1 && i3 >= i2) 
{
    document.write("number " +i3  +" is large. ");
    if (i1 <= i2) 
    {
        document.write("number " +i1  +" is small. ");
    } 
    else 
    {
        document.write("number " +i1  +" is small. ");
    }
} 
else 
{
    document.write("All numbers are equal. ");
}