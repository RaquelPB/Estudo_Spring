
// Evento de clique no botão fabricantes
document.getElementById("bt-fabricante").addEventListener("click", async function(event) {
    setMostrarOcutarElemento(true, ".minha-section");
    //setRemoverElementos(".tabela-dados");
    document.querySelector("#fabricantes").style.display = "block";
    const dadosFabricante = await getData("http://localhost:8080/api/fabricantes");
    if(dadosFabricante.ok === false) {
        document.querySelector("#fabricantes").innerHTML = "<p>Erro ao carregar dados dos Fabrincantes</p>";
        document.querySelector("#fabricantes").style.color = "red";
        return;
    }
    document.querySelector("#fabricantes").appendChild(criarTabelaFabricante(dadosFabricante));
});
 
// Evento de clique no botão modelos
document.getElementById("bt-modelo").addEventListener("click", async function(event) {
    setMostrarOcutarElemento(true, ".minha-section");
    //setRemoverElementos(".tabela-dados");
    document.querySelector("#modelos").style.display = "block";
    const dadosModelo = await getData("http://localhost:8080/api/modelos");
    document.querySelector("#modelos").appendChild(criarTabelaModelo(dadosModelo));
});
 
// Evento de clique no botão veículos
document.getElementById("bt-veiculo").addEventListener("click", async function(event) {
    setMostrarOcutarElemento(true, ".minha-section");
    //setRemoverElementos(".tabela-dados");
    document.querySelector("#veiculos").style.display = "block";
    const dadosVeiculo = await getData("http://localhost:8080/api/veiculos");
    document.querySelector("#veiculos").appendChild(criarTabelaVeiculo(dadosVeiculo));

});
