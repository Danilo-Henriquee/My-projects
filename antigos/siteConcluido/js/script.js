//Seu numero é part

let numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 10 é ${numero+10}</p>`;

//raiz quadrada part

const raizQuadrada = document.getElementById('raiz-Quadrada')
raizQuadrada.innerHTML = `<p>A raiz quadrada do seu numero é ${numero ** 0.5}<p/>`

//Nan part

const numeroNaoNumero = document.getElementById('numero-Nao-Numero')
let valor = isNaN(numero)
numeroNaoNumero.innerHTML = `<p>NaN : ${valor}<p/>`

//Arredondamento part

const arredondandoParaBaixo = document.getElementById('arredondandoB')
let numB = Math.floor(numero)
arredondandoParaBaixo.innerHTML = `<p>Arredondando de baixo: ${numB}<p/>`

const arredondandoParaCima = document.getElementById('arredondandoC')
let numC = Math.ceil(numero)
arredondandoParaCima.innerHTML = `<p>Arredondando de cima: ${numC}<p/>`

//Casa decimais part

const casasDecimas = document.getElementById('decimais')
let decimais = (numero / 100)
casasDecimas.innerHTML = `<p>Com duas casa decimais: ${decimais}<p/>`





