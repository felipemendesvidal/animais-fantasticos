
//isolando o tab nav
function iniciar_navegacao_tab(){

    //selecionando os elementos da li
    const tab_menu = document.querySelectorAll('.js-tabmenu li');

    //selecionando conteudo 
    const tab_conteudo = document.querySelectorAll('.js-tabconteudo section');
    // sempre colocando o primeiro item ativo
    tab_conteudo[0].classList.add('ativo');

    const classe_ativo = 'ativo';


    //verificando se os itens existem
    if(tab_menu.length && tab_conteudo.length){

        // adiciona class de acordo com um numero passado
        function ativar_tab (Numero_tab_ativar){

            //remove todos as class ativos antes de adicionar a class
            tab_conteudo.forEach( (section_percorrida) =>{
                section_percorrida.classList.remove(classe_ativo);
            } );

            //pega o conteudo em array e adiciona a class ativo
            tab_conteudo[Numero_tab_ativar].classList.add(classe_ativo);
        }

        // evento que captura o numero de onde foi clicado e adiciona na função de ativar tab
        tab_menu.forEach( (item_menu_percorrido, index_item_clicado) => {
            item_menu_percorrido.addEventListener('click', ()=> {
                ativar_tab(index_item_clicado);
            });
        });

    }
}

function inciar_acordeon(){
    const acordeon_lista = document.querySelectorAll('.js-acordeao dt');
    const classe_ativo = 'ativo';

    //verificando se .js-acordeao existe
    if(acordeon_lista.length){
        //selecionando o primeiro item da lista, para aparecer ja ativado
        acordeon_lista[0].classList.add(classe_ativo);
        acordeon_lista[0].nextElementSibling.classList.add(classe_ativo);

        //função que ativa o acordeon
        function ativar_acordeao(){
            this.classList.toggle(classe_ativo);
            this.nextElementSibling.classList.toggle(classe_ativo);
        }

        //adcionar um evento a cada item da lista
        acordeon_lista.forEach(  (item_da_lista) => {
            item_da_lista.addEventListener('click', ativar_acordeao);
        });
    }
    
}


function iniciar_scroll_suave (){
    const links_menu = document.querySelectorAll('.js-menu a[href^="#"]');


    function scrollparaSecao(evento){
        //resetando o padrão dos links
        evento.preventDefault();

        //pegar href do link que clicou
        const href_clicado = evento.currentTarget.getAttribute('href');

        // pegando a seção
        const secao = document.querySelector(href_clicado);


        //forma alternativa
        // pegando o tamanho to do topo 
        // const altura_ate_topo = secao.offsetTop;
        // window.scrollTo({
        //     top: altura_ate_topo,
        //     behavior: 'smooth'
        // });

        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });// dessa forma, vcê não precisa ver a distancia entre a section e o topo


    }


    //adicionando evento a cada link
    links_menu.forEach((link_percorrido)=>{
        link_percorrido.addEventListener('click', scrollparaSecao);
    });

}



//area de ativação das funcoes
iniciar_navegacao_tab();
inciar_acordeon();
iniciar_scroll_suave();