//selecionando os elementos da li
const tab_menu = document.querySelectorAll('.js-tabmenu li');

//selecionando conteudo 
const tab_conteudo = document.querySelectorAll('.js-tabconteudo section');


// adiciona class de acordo com um numero passado
function ativar_tab (Numero_tab_ativar){

    //remove todos as class ativos antes de adicionar a class
    tab_conteudo.forEach( (section_percorrida) =>{
        section_percorrida.classList.remove('ativo');
    } );

    //pega o conteudo em array e adiciona a class ativo
    tab_conteudo[Numero_tab_ativar].classList.add('ativo');
}

// evento que captura o numero de onde foi clicado e adiciona na função de ativar tab
tab_menu.forEach( (item_menu_percorrido, index_item_clicado) => {
    item_menu_percorrido.addEventListener('click', ()=> {
        ativar_tab(index_item_clicado);
    });
});