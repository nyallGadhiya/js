//let userdate = new Object();
  //^^Another way to declare object

  //nested objects

  const obj1={
    'fullname':{
        'userfullname':{
            'firstname':'nyall',
            'lastname':'gadhiya'
        },
    },
    'age':19,
    'isloggedIn':true
  }


//console.log(obj1.fullname.userfullname.firstname);



const object1={
    a:1,
    b:2,
    c:3
}
const object2={
    d:4,
    e:5,
    f:6
}
const object3={
    g:7,
    h:8,
    i:9
}

const finalobject = {...object1,...object2,...object3};
//console.log(finalobject);

let users ={
    
        id:"nyal",
        password:"432e47d",
        id:"meet",
        password:"d23345#",
        id:"erp",
        password:"sfr4t2@"
}

console.log(Object.keys(users));

console.log(Object.values(users));

console.log(Object.entries(users));

console.log(users.hasOwnProperty('id'));