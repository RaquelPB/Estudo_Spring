// Função responsável por limpar as sections
const limparSections = function() {
    document.querySelectorAll(".section").forEach(function(section) {
        section.style.display = "none";
    });
};
 
// Evento de clique no botão fabricantes
document.getElementById("bt-fabricante").addEventListener("click", function(event) {
    limparSections();
    document.querySelector("#fabricantes").style.display = "block";
});
 
// Evento de clique no botão modelos
document.getElementById("bt-modelo").addEventListener("click", function(event) {
    limparSections();
    document.querySelector("#modelos").style.display = "block";
});
 
// Evento de clique no botão veículos
document.getElementById("bt-veiculo").addEventListener("click", function(event) {
    limparSections();
    document.querySelector("#veiculos").style.display = "block";
});
