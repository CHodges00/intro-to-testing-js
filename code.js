//helloWorld function

// function helloWorld() {
//     return ("Hello, World!");
// }

// const helloWorld = function() {
//     return "Hello, World!";
// }

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

