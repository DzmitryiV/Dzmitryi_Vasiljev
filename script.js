function sum(a) {
    let numb = a
    function sum2(b){
    numb += b
    return sum2
}
sum2.toString = function () {
    return numb;
};
return sum2;
}

console.log (sum(1)(2))
console.log (sum(1)(2)(3))

