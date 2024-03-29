
// let empdetails = {
//     EmpID : 1,
//     First_Name : "hemant Singh" ,
//     last_Name : "Dodiya" ,
//     Salary : 25000,
//     EmpDes : "Java developer" ,
//    fullname: function(){
//        return this.First_Name +" " +this.last_Name ;
//     },
//     Family :{
//     Father : ["age : 48" , "profession : Teacher" , "Fav_place : Goa"],
//     Mother : ["age : 44" , "profession : Housewife" , "Fav_place : kedarnath"],
//     brother: ["age : 21" , "profession : Teacher" , "Fav_place : everywhere"]
//     }
// }
//   let Fullname = empdetails.fullname();
//      console.log(empdetails.EmpDes)
//      console.log(Fullname);
//    console.log(empdetails.Family.Father)
//    console.log(empdetails.Family.Mother)
//    console.log(empdetails.Family.brother)


let arr = [20,10,50,30,66,33];
document.write(arr + "<br>");
arr.sort();
document.write(arr +": sort"+ "<br>");

arr.reverse();
document.write(arr + ": reverse"+"<br>");

arr.pop();
document.write(arr + ": pop"+"<br>");

arr.push(20);
document.write(arr +": push"+ "<br>");

arr.shift();
document.write(arr +": shift"+ "<br>");

arr.unshift("1");
document.write(arr + ": unshift"+"<br>");

let a = [1,2,3,4];
document.write(a + "<br>");
let b = [5,6,7,8];
document.write(a + "<br>");
let c = a.concat(b);
document.write(c +": concat"+ "<br>");

let d = c.join("-");
document.write(d +": Join"+ "<br>");
// function decleration         function expression          function refrence             function callback
// slice - 
// splice - 
// is array - is array or not
// indexOF  - start from first
// lastindexof - start from last
// some  - if one condition  true , true
// Every  - if one condition false , false
// filter  - 