const modal = document.getElementById("modal");
const CLOSE_MODAL_BUTTON = document.getElementById("close-modal");


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


//evento de clique botão enviar forulario

document.getElementById("form-fabricante").addEventListener("submit", async function(event) {

    event.preventDefault();

    const nome_fabricante = document.getElementById("nome-fabricante").value;
    const pais_origem = document.getElementById("pais-fabricante").value;


    const require = await fetch("http://localhost:8080/api/fabricantes", {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
             nome: nome_fabricante,
             paisOrigem: pais_origem
        })
    });

    if (require.status === 409) {
        alert("Conflito: O fabricante já existe ou há um problema com os dados enviados.");
    } else if (require.ok) {
        alert("Fabricante adicionado com sucesso!");
        modal.style.display = "none";
    } else {
        alert("Erro ao adicionar fabricante.");
    }
});


//evento de clique no botão fechar modal

CLOSE_MODAL_BUTTON.addEventListener("click", function() {
    modal.style.display = "none";
});

//evento de clique no botão adicionar fabricante
document.getElementById("novo-fabricante").addEventListener("click", async function(event) {
    modal.style.display = "block";
 });
