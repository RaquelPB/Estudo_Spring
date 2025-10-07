
// Evento de clique no botão fabricantes
document.getElementById("bt-fabricante").addEventListener("click", async function(event) {
    setMostrarOcutarElemento(true, ".minja-section");
    document.querySelector("#fabricantes").style.display = "block";
    document.querySelector("#fabricantes").appendChild(criarTabela( await getData("http://localhost:8080/api/fabricantes")));
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
