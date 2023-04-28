let num_array=[1,3,7,5,3,9];

// for(let i=0;i<num_array.length;i++)
//   {
//     console.log(num_array[i])
//   }

// num_array.forEach((element)=>{
//   console.log (element * element);
// })

//for of loop
// for(let j of num_array)
//   {
//     console.log(j);
//   }

//for in loop
// for(let j in num_array)
//   {
//     console.log(num_array[j]);
//   }

//map()                    //Returns the new array

// let a1=[1,8,5,33,27,80];

// let a2=a1.map((value,index,array)=>{
//   console.log(value,index,array);
//   return value+1;
// })
// console.log(a1)

//filter()

// let a3=a1.filter((val)=>{
//   return val<10;
// })
// console.log(a3)

//Q1 take user input and add that to the array *prompt only works in index*
// let arr=[1,6,8,4,10]
// let a= prompt("enter a number-");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//q2 keep adding the numbers in to the array until the number is 0
// let arr=[1,5,7,8,3,5];
// let a;
// do{
// a= prompt("enter a number-");
// a=Number.parseInt(a);
// arr.push(a);
//  }while(a!=0)
// console.log(arr);

//q3  numbers divisible by 10 by using filter()
// let a=[20,5,60,8,20,50,8,6];
// let b=a.filter((num)=>
//   {
//     return num%10==0;
//   })
// console.log(b)

//square of the all numbers present in the array
// let p=[2,4,5,7,9];
// let sq_num=p.map((num)=>{
//   return num*num;
// })
// console.log(sq_num);

//q5 factorial of all the numbers present in that array?
// let nums=[3,5,2];
// let fact=nums.reduce((x,y)=>{
//   return x*y;
// })
// console.log(fact)