// /*const obj={
//   "smruti":100,
//   "shlzz":true,
//   "subhu":null,
//   "swati":"hii"

// }
// console.log(obj["swati"]);
// console.log(obj["smruti"]);
// console.log(obj["shlzz"]);
// console.log(obj["subhu"]);
// console.log(obj["tutun"]);   */

// // const dict={
// //   yakka:"hard work",
// //   possession:"The state of owning something ",
// //   recession:"A downward trend in business"
// // }
 
// // dict["subtle"]="not very bright"
// // console.log(dict)

// // let age=prompt("Enter your age -");
// // if(age<10){
// //   alert("You are not allowed for driving");
// // }
// // else if(age>10 && age<18)
// // {
// //   alert("may be allowed for driving");
// // }
// // else{
// //   alert("You are allowed for driving");
// // }

// //Ternary Operator
// // let age=prompt("Enter your age -");
// // console.log("You can ",(age<18 ? "not drive" : "drive"));
// //Switch statement
// // const name="shlzz";
// //  switch (name){
// //    case "subhu":
// //        console.log("My name is subhashree nayanika nayak");
// //        break;
// //    case "shlzz":
// //        console.log("My name is  shailaja tripathy");
// //   case "bubun":
// //        console.log("My name is suchisman mishra");
// //        break;
// //   case "Smruti":
// //        console.log("My name is Smrutipragyan Biswal");
// //        break;
// //      default:
// //        console.log("Invalid name :(");
// //  }

// //Q1:

// let age=prompt("Enter your age =");
// age=Number.parseInt(age);
// if(age>=10 && age<=20)
// {
//   alert("The age lie in between 10 to 20");
// }
// else{
//   alert("The age doesnot lie.")
// }   

// /*Q2:

// let age=prompt("enter age:");
// age=Number.parseInt(age);
// switch (age){
//   case 10:
//     console.log("Age is 10");
//     break;
//   case 20:
//     console.log("Age is 20");
//     break;
//   case 50:
//     console.log("Age is 50");
//     break;
//   default:
//     console.log("Age is invalid");
// } */

// /* Q3:

// let num=prompt("enter the number here:");
// num=Number.parseInt(num);
// if(num%2==0 && num%3==0)
// {
//   console.log("you chose the right number.");
// }
// else
// {
//   console.log("No, the number is not divisible by 2 and 3.")
// }   */

// /* Q4:

// let num=prompt("enter the number here:");
// num=Number.parseInt(num);
// if(num%2==0 || num%3==0)
// {
//   console.log("you chose the right number.");
// }
// else
// {
//   console.log("No, the number is not divisible by 2 or 3.")

// }  */


// //Q:5  using ternary operator?

// /* let age=prompt("the age is :");
// age=Number.parseInt(age);
// alert((age>18)?"you can drive":"You can not drive") */

// // let num=prompt("enter the numeber here:");
// // for(let i=1;i<=num;i++)
// //   {
// //     console.log(i);
// //   }

// // factorial of n natural numbers :

// // let num=prompt("Enter the number=");
// // num=Number.parseInt(num);
// // let fact=1;
// // for(let i=1;i<=num;i++)
// //   {
// //     fact*=i;
// //   }
// // console.log("The factorial of first " + num + " numbers is " + fact)

// //while loop
// /* let a=5;
// a=Number.parseInt(a);
// let i=0;
// while(a>i)
//   {
//     console.log("smruti")
//     i++;
//   }              */

// //do while loop
// /* let a=5;
// a=Number.parseInt(a);
// let i=0;
// do{
//   console.log("Akhil");
//   i++;
// }
//   while(i<a)                */

// //Functions 
// // let a=2;
// // let b=4;
// // let c=6;
// // function averageNum(x,y)
// // {
// //   return (x+y)/2;
// // }
// // let avg1=averageNum(a,b);
// // console.log(avg1);


// //New way for declare a function
// /*   let a=2,b=6;
// const myFunc=(a,b)=>
//   {
//     return a+b;
//   }
// console.log(myFunc(a,b));             */

// // let marks={
// //   Aman:70,
// //   Akhil:60,
// //   abhi:80
// // }
// // for(let i=0;i<Object.keys(marks).length;i++)
// //   {
// //     console.log("The marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
// //   }
// //          OR
// // for(let keys in marks)
// //   {
// //     console.log("The marks of "+keys+" are "+marks[keys] );
// //   }

// // let correct_num=29;
// // correct_num=Number.parseInt(correct_num);
// // let guess;
// // while(guess!=correct_num)
// //   {
// //      guess=prompt("Enter the number=");
// //   }
// // console.log("You have guessed the right number");

//  //mean of 5 numbers using function
// /* function meanOfNum(a,b,c,d,e)
//   {
//     return (a+b+c+d+e)/5;
//   }
// console.log(meanOfNum( 1,2,3,4,5))      */
 
// // Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) ;

// let guess;
// let score = 100;

// while (guess !== randomNumber) {
//   // Ask the user for a guess
//   guess = parseInt(prompt("Guess a number between 1 and 100"));

//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     alert("Please enter a valid number between 1 and 100.");
//     continue;
//   }

//   // Check if the guess is correct, greater or smaller than the random number
//   if (guess === randomNumber) {
//     alert(`Congratulations! You guessed the number in ${score} guesses.`);
//   } else if (guess > randomNumber) {
//     alert("Your guess is greater than the random number.");
//   } else {
//     alert("Your guess is smaller than the random number.");
//   }

//   score--;
// }


 