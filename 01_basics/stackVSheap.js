//stack 

//call by value 
let base = 87
let derived=base
derived=84

console.table([base,derived]);


//heap
//call by reference

let user01 ={
    gmail:"nyalgadhiya335@gmail.com",
    upi:"nyvs@ybl"
}
let user02 = user01
user02.gmail="2022001201.nvpas@cvmu.edu.in"
console.table([user01,user02]);