//selecionando os elementos da li
const tab_menu = document.querySelectorAll('.js-tabmenu li');

//selecionando conteudo 
const tab_conteudo = document.querySelectorAll('.js-tabconteudo section');


// adiciona class de acordo com um numero passado
function ativar_tab (Numero_tab_ativar){

    //pega o conteudo em array e adiciona a class ativo
    tab_conteudo[Numero_tab_ativar].classList.add('ativo');
}