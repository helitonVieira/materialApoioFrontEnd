import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", (nome: string) => {
  console.log(`Olá, ${nome}!`);
  console.log(soma(10, 5));

  let numeros : number[] = [10,20,30,40];
  console.log(somaArray(numeros));


  rl.close();
});


function soma ( a: number ,b: number): number{
    return  a + b;
};

function somaArray(numeros : any):number{
    let x: number = 0;

    //exemplo 1 
    for (let index = 0; index < numeros.length; index++) {
       x += numeros[index];
       console.log(numeros[index]); 
    }

     //exemplo 2
     let soma = 0;
    for (const num of numeros) {
        soma += num;
    }
    console.log("soma é: " + soma); 

    return x ;
}