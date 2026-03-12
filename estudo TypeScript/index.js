"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite seu nome: ", function (nome) {
    console.log("Ol\u00E1, ".concat(nome, "!"));
    console.log(soma(10, 5));
    var numeros = [10, 20, 30, 40];
    console.log(somaArray(numeros));
    rl.close();
});
function soma(a, b) {
    return a + b;
}
;
function somaArray(numeros) {
    var x = 0;
    //exemplo 1 
    for (var index = 0; index < numeros.length; index++) {
        x += numeros[index];
        console.log(numeros[index]);
    }
    //exemplo 2
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    console.log(soma);
    return x;
}
