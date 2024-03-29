// 2.  Find the largest and smallest of two number.

let i1=Number(prompt("input 1 number "));
let i2=Number(prompt("input 2 number "));
if (i1 > i2) 
{
    document.write("number  " +i1  +"is large  ");
    document.write("number  "+ +i2 + " is Small  ");
} 
else if (i1 < i2) 
{
    document.write("number " +i1  +" is Small  ");
    document.write("number "+ +i2 + "  is Large  ");
} 
else
{
    document.write("Both numbers are equal");
}
