/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

    passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

    passo 2 - identificar o clique 

    passo 3 - adicionar a classe ativo nos projetos 

Objetivo 2 - esconder o botão mostrar mais 

    passo 1 - pegar o botar e esconder ele 
*/

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

//passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
 