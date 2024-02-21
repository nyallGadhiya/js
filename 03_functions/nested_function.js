function one() {

    const username="hyk@354"
    
    function two() {
        const password="1214w22!"
        console.log(username);
    }
   // console.log(password);

    two()
}
one()




//+++++++++++++++++++++++++++++++++++interesting part+++++++++++++++++++++++++++++++

addone(5)

function addone(num) {
    return num + 1;
}

  addtwo(6)
//error occured !

let fnum=function addtwo(num1) {
    return num1 + 2;
}