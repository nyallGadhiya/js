let mySymbol = Symbol("hello")
const myobj = {
    'name':'nyal',
    'surname':'gadhiya',
    'age':'19',
    [mySymbol]:"hello_1",
    'isLoggedIn':true,
    'LoginDays':['sunday','monday','tuesday']
}

//console.log(myobj['surname'])
//console.log(myobj[mySymbol])

console.log(myobj);
//Object.freeze(myobj);


myobj.greet1 = function () {
    console.log('hello ! How are you ......');
}
console.log(myobj.greet1());

myobj.greet2 = function () {
    console.log(`Hello ${this.name}`);
}

console.log(myobj.greet2());