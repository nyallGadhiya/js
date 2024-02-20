

let mydata={
    name:'nyal',
    year:'2nd' ,
    branch:'CSE'
}

function printdata(mydata) {
    console.log(`Hello My name is ${mydata.name},\ncurrently in ${mydata.year} of ${mydata.branch}`);
}
//printdata(mydata);




//Another way to add objects in parameters

function ATTdata(liveobject) {
    console.log(`
    You choosed ${liveobject.product}\n
    price is ${liveobject.price}
    `);
}
ATTdata({
    product:"MSI RAIDER GE68HX",
    price:"3,02,000 Rs"
});