
/*
    Função para mostrar e ocultar elementos
    Parametros:
    esconder: boolean - true para esconder, false para mostrar
    elemento: string - classe ou id do elemento a ser manipulado
    Exemplo de uso:
    setMostrarOcutarElemento(true, ".minha-classe");
*/
const setMostrarOcutarElemento = function(esconder, elemento) {
    document.querySelectorAll(elemento).forEach(function(section) {
        section.style.display = esconder ? "none" : "block";
    });
    document.querySelectorAll(elemento).forEach(function(section) {
        section.remove();
    });
};


