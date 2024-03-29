// 5.Find that a given number is present in given range or not

for(let i=1;i<=110;i++){
if(i%3 == 0 && i%5 == 0 && i%7 == 0){
    document.write("<br>" + i + " --> Divisible by 3,5 & 7 ");

}
else if(i%3 == 0 && i%5 == 0){
    document.write("<br>" + i + " --> Number is divisible by both 3 & 5 ");
}
else if(i%3 == 0 && i%7 == 0){
    document.write("<br>" + i + " --> Number is divisible by both 3 & 7 ");
}
else if(i%5 == 0 && i%7 == 0){
    document.write("<br>" + i + " --> Number is divisible by both 5 & 7 ");
}
else if(i%3 == 0 || i%5 == 0 || i%7 == 0){
    if(i%3 == 0){
        document.write("<br>" + i + " --> Number is divisible by 3");
    }
    else if(i%5 == 0){
        document.write("<br>" + i + " --> Number is divisible by 5");
    }
    else if(i%7 == 0){
        document.write("<br>" + i + " --> Number is divisible by 7");
    }
}
else{
    document.write("<br>" + i +" --> ");
}
}

