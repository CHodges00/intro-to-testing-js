//helloWorld function

function helloWorld() {
    return ("Hello, World!");
}

// const helloWorld = function() {
//     return "Hello, World!";
// }
//
function sayHello(name) {
    if (typeof(name) === "undefined"){
        return 'Hello, World!';
    }else if (typeof(name) === "boolean") {
        return 'Hello, World!'
    }else if (typeof(name) === "number") {
        return 'That\'s a number !';
    }else{
        return `Hello, ${name}!`;
    }
}
//
//     if (name === 'Alex') {
//         return ('Hello, Alex!');
//     }else if (name === 'Pat'){
//         return ('Hello, Pat!')
//     }else{
//         return ('Hello, Jane!')
//     }
// }

function isFive(input){
    if ((input) == 5){
    return 'true';
    }else{
        return 'false';
    }
}
//
function isEven(input){
    if ((input) % 2 === 0){
        return 'true';
    }else{
        return 'false';
    }
}
//
function isVowel(input) {
    if (typeof input === 'string') {
        return input.toLowerCase() === 'a'
            || input.toLowerCase() === 'e'
            || input.toLowerCase() === 'i'
            || input.toLowerCase() === 'o'
            || input.toLowerCase() === 'u'
    } else {
        return false;
    }
}
//
function add(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return NaN;
    }else {
        return Number(num1) + Number(num2);
    }
}
//
