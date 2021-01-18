//Chapter 31-34

//Question 01
 //  var a = new Date();
  // document.write(a)
  
//Question 02
  
    //var arr =['January','February','March','April','May','June','July','August','September','October','November','December']
   // var a = new Date()
    //var month= a.getMonth()
   // document.write(arr[month])
 
 
  //Question 03
    //var arr = ['Mon','Tue','Wed','Thurs','Fri','Satur','Sun'];
    //var a = new Date()
    //var day = a.getDay()
   //document.write(arr[day])
  
  //Question 04
   //var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  // var a = new Date()
   //var day = a.getDay()
  // if(arr[day]===['Saturday','Sunday']) {
 // document.write("It's Fun day")
//}
 //else {
//  document.write("It's Working Day")
//}

//Question 05

//var date = new Date()
//var day = date.getDay()
//if (day > 16){
  //document.write ("first fifteen days of the month")
  
//}
//else{
  //document.write("Last fifteen days of the month")
//}
//Question 06
//var a = new Date()
//var b = a.getTime ()
//document.write("Current date:" + a+ "<br>")
//document.write ("Elapsed milliseconds since January 1,1970:" + b + "<br>") 
//document.write("Elapsed minutes since January 1,1970:"+ b /(1000 * 60*60))

//Question 07
//var a = new Date()
//var b = a.getHours()
//if (b < 12){
  //Alert("It's AM")
//}
//else {
  //alert ("It's PM")
//}

//Question 08
//var laterDate = new Date("Dec 31,2020")
//document.write(laterDate)

//Question 09
//var a = new Date ("April 24,2020")
//var b = new Date ()
//var c = b.getTime() - a.getTime()
//var d = c / (1000 * 60 * 60 * 24)
//document.write(Math.round (d) + "days have passed since 1st ramadan , 2020" )

//Question 10
//var a = new Date ("January 1,2020")
//var b = new Date ()
//var c = b.getTime() - a.getTime()
//document.write("On reference date " + a + "<br>");
//document.write(Math.round(c / (1000*60)) + " seconds had passed since beginning of 2020")

//Question 11
//var a = new Date ()
//document.write("Current date:" + a +"<br>")
// a.setHours(a.getHours() - 1)
//document.write ("1 hour ago,it was" + a)

//Question 12
//var a = new Date ()
//document.write("current date: " + a + "<br>")
//a.setFullYear (a.getFullYear() -100)
//document.write("100 years back,it was" + a)

//Question 13
//var dob = +prompt ("Enter your age", "your age is")
//var date = new Date ();
//var year = date.getFullYear()-dob;
//document.write("Your age is " + dob + "<br> Your BirthYear is " + year)

//Question 14
 // var a = new Date();
  //var name = prompt("Enter your name");
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter number of units");
// var charges = 16;
// var netAmount = units*charges;
// var latePay = 350;
// var grossAmount = netAmount + latePay;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>"  +  name + "</b><br>Month: <b>" + month[a.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Units per charge: <b>" + charges + "</b>");
// document.write("<br><br>Net amount payable (within Due Date): <b>" + netAmount + "</b><br>Late payment surcharge: <b>" + latePay + "</b><br>Gross Amount payable (after Due Date): <b>" + grossAmount + "</b>")


//Task#35-38

//Question 01
// function date(currentDate){
// document.write(currentDate);
// }
// date(new Date);

//Question 02
// var a = prompt("Enter your first name");
// var b =  prompt("Enter your last name");
// function name(greet){
//     alert("Hello " + a + " " + b); 
// }
// name();

// Question 03
// var number = +prompt("Enter first number");
// var number1 = +prompt("Enter second number");
// function sum(number,number1){
//     alert(number+number1);
// }
// sum(number,number1)

//Question 04
//Calculator:
  //var num1 = prompt("Enter first value");
 // var operator = prompt("Enter your operator");
  //var num2 = prompt("Enter second value");
  //function calc(num1,operator,num2){
  //if(operator === "+"){
      //return + num1+ + num2 
  //}
  //else if(operator === "-"){
     //return num1 - num2
  //}
   // else if(operator === "*"){
     // return num1 * num2
 // }

   //else if(operator === "/"){
     // return num1 / num2
  //}
   //else if(operator === "%"){
   //return num1 / num2*100
 //}
//  }
  //document.write("The output is: " + calc( num1 , operator , num2))

// Question 05
// function s(num) {
//     for (i=0; i<=num; i++){
//         var sum=0;
//         var j = i*i;
//         sum = j;
//         document.write('<br>Squares Number : '+sum);
//     }
//     document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
// }

// var num = +prompt("Enter a number for Squares :");
// s(num);

// Question 06
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// var factor = +prompt("Enter a Factorial Number ")
// document.write("<br><br>" + factorial(factor) + "<br><br>");

// Question 07
// function counting (1num,2num){
//     for (i=1num; i <= 2num; i++){
//         document.write("<br>" + i);
//     }
// }
// var 1num = +prompt('Enter a number for Start Counting ');
// var 2num = +prompt('Enter a number for End Counting ');
// document.write("<h2>Counting</h2>");
// document.write("Starting number : " + 1num +"Ending number is : "+2num);
// document.1num,2num);

//Question 08


//Question 09

//Question 10
// var  word = prompt("Enter your word")
// var drome = "";
// function palindrome(palin,drome){
//     for(var i = palin.length - 1;i <= 0;i--){
// drome += [i]
//     }
//     if(word === drome){
//         return word + " is palindrome word"
//     }
//     else{
//         return "This is not a palindrome word"
//     }
// }
//     alert(palindrome(word , drome ,i))

//Question 11
// function upper(string){
// document.write("the quick brown fox".ucwords())
// }
// document.write(upper())

//Question 12

//Question 13

//Question 14