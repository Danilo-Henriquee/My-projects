const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){

    // aqui está criando um novo elemento li dentro do ul
    const li = document.createElement('li');

    // aqui está retornando o valor de li  pra quando a função 
    // for chamada
    return li;
}
inputTarefa.addEventListener('keypress', function(e){

    // aqui está checando o codigo da tecla pressionada
    // se for 13 que é o codigo da tecla enter
    // ele adiciona também a tarefa
    if (e.keyCode === 13) {

        //checando se o valor do input não está vazio
        if (!inputTarefa.value) return;

        // chamando a função criaTarefa passando o valor
        // do valor digitado no input para o argumento textoInput
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){

    // aqui está zerando o valor do input quando o usuario enviar 
    // o input
    inputTarefa.value = '';

    // evento de focus quer dizer quando o usuario clica no input
    // quando ele enviar o input ele pode digitar denovo sem ter que
    // clicar novamente no input
    inputTarefa.focus();
}
function criaBotaoApagar(li){

    // aqui está criando um espaço na linha para criar o botão
    li.innerText += ' ';

    // aqui está criando o botão para apagar a tarefa
    const botaoApagar = document.createElement('button');

    // aqui está colocando o nome do botão para o usuario ver que
    // serve para apagar a tarefa
    botaoApagar.innerText = 'Apagar';

    // como esse botão não é visivel no HTML, está sendo criado via JS
    // na forma abaixo eu passo o atributo class com nome apagar para
    // esse botão, para poder adicionar a funcionalidade de apagar.
    botaoApagar.setAttribute('class', 'apagar');

    // está funcionalidade está colocando o atributo title
    // que quando o usuario permanecer com o mouse em cima do botão
    // apareca de forma anonima apagar essa tarefa.
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');

    // aqui está adicionando o botão apagar ao lado da tarefa criada
    li.appendChild(botaoApagar);
}
function criaTarefa(textoInput){

    // dentro de li está a função cria li
    const li = criaLi();

    // aqui está retornando o valor de li para o navegador exibir
    li.innerHTML = textoInput;

    // aqui está adicionando uma nova li dentro do html com o valor do input
    tarefas.appendChild(li);

    // aqui está chamando a função limpaInput que vai limpar o input quando
    // o usuario enviar o input
    limpaInput();

    // aqui está chamando a função que cria botões para apagar as tarefas
    criaBotaoApagar(li);

    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){

    // inputTarefa.value é o valor contido nessa variavel
    if (!inputTarefa.value) return;

    // aqui esta chamando a funçao cria tarefa com o valor do 
    // argumento textoInput contendo o valor digitado no input.
    criaTarefa(inputTarefa.value);
})

// aqui está adicionando um escutador de eventos que captura
// todos os clicks do navegador, qualquer lugar que eu clicar
// o valor desse click vai ser guardado dentro do argumento event.
document.addEventListener('click', function(event){

    // aqui está guardando dentro de uma variavel o valor
    // do click
    const el = event.target;
    
    // aqui estou perguntando se o valor do click contem
    // a classe chamada apagar
    if (el.classList.contains('apagar')) {

        // aqui como o botão está contido dentro de uma li
        // o botão é filho da li que é a pai
        // para remover o pai quando o botão for clicado
        // usa remove, o parentElement está selecionando 
        // o elemento pai
        el.parentElement.remove();
        salvarTarefa();
    }
})

// está função vai salvar as tarefas criadas pelo usuario
// e quando o usuario por exemplo fechar a aba ou atualizar
// a pagina ira mostrar as mesmas tarefas
function salvarTarefa(){

    // aqui está sendo selecionados todos os li criados
    // pelo usuario ao adicionar tarefas
    const liTarefas = tarefas.querySelectorAll('li');

    // aqui está sendo criado um array para armazenar todos os nomes
    // das tarefas
    const listaDeTarefas = [];

    // aqui é um laço que percorre todos os li do liTarefas 
    // mostrando seus valores
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;

        // aqui está realocando o valor apagar que vem junto com o li
        // e colocando o valor vazio para não ser selecionado
        // trim remove o espaço ao final do valor.
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();

        // aqui está sendo adicionado ao array listadeTarefas o 
        // texto que foi digitado pelo usuario
        listaDeTarefas.push(tarefaTexto); 
    }
    // aqui esta sendo criado um formato de texto para salvar dados para
    // se comunicar entre sistemas.
    // foi criada uma string do array listaDeTarefas em formato JSON
    // pode pegar essa string e converter novamente para array

    // JSON.stringfy transforma um elemento JavaScript para uma
    // string em formato JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);

    // é um local no navegador onde pode salvar dados no navegador
    // uma mini base de dados
    // tarefas é o nome que vai ser utilizado para recuperar os dados
    // e logo em seguida usa o nome da variavel que você quer salvar
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {

    // aqui ele está buscando la no localStorage o item que se chama tarefas
    // que foi salvo no setItem acima usa o mesmo nome que la.
    // ele vai pegar todo os dados armazenados e colocar em uma variavel
    const tarefas = localStorage.getItem('tarefas');

    // JSON.parse esta transformando um elemento de volta para um elemento
    // JavaScript
    const listaDeTarefas = JSON.parse(tarefas);
    
    // aqui é um laço que percorre todo o listaDeTarefas que ja foi
    // transformado em um elemento javaScript, e guardando seus valores
    // no tarefa
    for (let tarefa of listaDeTarefas) {

        // aqui estou chamando a função cria tarefas para criar novamente
        // todos as tarefas criadas armazenadas no cache do navegador
        criaTarefa(tarefa);
    }
}

// aqui está sendo chamada a função para exibir os 
// valores armazenados em cache
adicionaTarefasSalvas()