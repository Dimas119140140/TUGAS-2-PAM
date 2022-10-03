//6.Execution Stack
let d ='hi saya dimas';

function first(){
    console.log('dalam first function');
    second();
    console.log('dalam first function');
}
function second(){
    console.log('dalam second function');
}

first();
console.log('eksekusi keseluruhan');