function mostrarSecao(secaoId) {
    // Esconde todas as seções
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function(secao) {
        secao.classList.remove('ativa');
    });

    // Mostra a seção clicada
    var secaoParaMostrar = document.getElementById(secaoId);
    secaoParaMostrar.classList.add('ativa');
}
