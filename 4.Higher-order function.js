//4.Higher-order function
function kalkulator(operation,initialvalue,angka) {
    let total = initialvalue;
    for (const number of angka) {
        total = operation(total + number);
    }
    return total;
}
function sum(t1, t2) {
    return t1 + t2;
}
function multiply(t1, t2){
    return t1 * t2;
}
kalkulator(sum,0,[2,3,1]);
kalkulator(multiply,2,[2,4,3]);