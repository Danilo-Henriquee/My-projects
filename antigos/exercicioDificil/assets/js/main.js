// Capturar de submit(enviar) do formulário
const form = document.querySelector('#formulario')

// escutador de evento no formulario 
form.addEventListener('submit', function (e) {
    e.preventDefault(); //previnimos o default de enviar o formulario
    const inputPeso = e.target.querySelector('#peso') // capturamos os dados dos inputs
    const inputAltura = e.target.querySelector('#altura') // capturamos os dados dos inputs

    const peso = Number(inputPeso.value) // tentamos converter os inputs para numbers
    const altura = Number(inputAltura.value) // se caso retornar NaN que avalia como falso em javaScript

    if (!peso) {
        setResultado('Peso inválido', false) // se o peso não for avaliado como verdadeiro
        return;                              // você seta o resultado 'Peso invalido'
    }

    if (!altura) {
        setResultado('Altura inválida', false) // se a altura não for avaliada como verdadeira
        return;                                // você seta o resultado 'altura invalida'
    }

    const imc = getImc(peso, altura); // função especifica para calcular o IMC
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} ${nivelImc}`; // nossa mensagem mostrando os valores

    setResultado(msg, true) //mandamos setar o resultado com a flag True para colocar nossa classe verdadeira

    console.log(imc , nivelImc)
});

function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'Peso normal' ,'Sobrepeso', // criamos um array com uma lista de strings
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']  // que baseado no IMC que a gente vai receber
                                                                 // vamos checar a logica mas invertemos a logica
                                                                 // e começamos a checar de trás para frente
    if (imc >= 39.9) {
    return nivel[5]}         // a medida em que a engine encontrar o return 
                             // a função passa a não ser mais executada
    if (imc >= 34.9) {
    return nivel[4]}

    if (imc >= 29.9) {
    return nivel[3]}

    if (imc >= 24.9) {
    return nivel[2]}

    if (imc >= 18.5) {
    return nivel[1]}

    if (imc < 18.5)  {
    return nivel[0]}

}

function getImc (peso, altura) { //função que só faz o calculo do IMC
    const imc = peso / altura **2
    return imc.toFixed(2); // esse comando adiciona duas casas decimais ao valor
}

function criaP(className) {
    const p = document.createElement('p'); // função que só cria um paragrafo
    return p;
}

function setResultado(msg, isValid) { // uma função que seta o resultado ela recebe uma mensagem(msg) e se esse resultado é valido
    const resultado = document.querySelector('#resultado'); // aqui selecionamos nossa div de resultado
    resultado.innerHTML = '';   // zera o HTML daquele resultado

    const p = criaP(); //cria um paragrafo

    if (isValid) { // e dai checamos essa flag (IsValid) foi enviada como verdadeira ou falsa baseado nela
        p.classList.add('paragrafo-resultado') // se for verdadeiro significa que é valido então para a classe sera o fundo verde
    }   else {
        p.classList.add('bad') // se for falsa significa que não é valido então o fundo é vermelho
    }  
    
    p.innerHTML = msg; // setamos o innerHTML do paragrafo com a mensagem que estamos recebendo
    resultado.appendChild(p); // adiciona child esse paragrafo no nosso paragrafo
}