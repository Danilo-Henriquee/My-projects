//  Aqui foi selecionada a div que contem todos os 'p' paragrafos
const paragrafos = document.querySelector('.paragrafos');


//   Aqui foram pego todos os estilos computados do CSS do Body
const estilosBody = getComputedStyle(document.body);


//   Aqui foi pego a cor RGB do background do Body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)


//   Aqui foram selecionados todos os 'p'
const ps = document.querySelectorAll('p')


//  Aqui o for vai passar por todos os ps e vai colocar a cor de 
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}
