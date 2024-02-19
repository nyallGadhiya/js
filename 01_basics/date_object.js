newdate = new Date()
console.log(newdate,toString());
console.log(newdate.toLocaleString('en-IN'));

myCreatedDate = new Date(2005,2,3)
console.log(myCreatedDate.toDateString());


myCreatedDateWithTime = new Date(2005,2,3,19,15)
console.log(myCreatedDateWithTime.toLocaleString());

date3=new Date("2010-10-05")
console.log(date3.toDateString());



//now

let datenow = new Date()
console.log(datenow.getFullYear());
console.log(datenow.getDate());

