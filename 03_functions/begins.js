function sum(number1,number2) {
    let res=number1+number2
    return res
}
let result = sum(3,2);
console.log(result);

function printname(name)
{
    if(name == undefined)
    {
        console.log(`please enter your name !`);
        return
    }
    let nm=`hello ${name} how are you !`
    return nm 
}
let print=printname("nyal")
console.log(print);