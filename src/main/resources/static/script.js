async function getData() {
    const url = "http://localhost:8080/api/fabricantes";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const dadosFabricantes = await response.json();
        return dadosFabricantes;

    } catch (error) {
        console.error("Erro ao obter os dados: ", error);
    }
}



// Função responsável por limpar as sections
const limparSections = function() {
    document.querySelectorAll(".section").forEach(function(section) {
        section.style.display = "none";
    });
};

// Função para criar tabelas dinamicamente

function criarTabela(dados) {
   
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const cabecalho = Object.keys(dados[0]);

    const tr = document.createElement("tr");
    cabecalho.forEach(function(campo) {
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    dados.forEach(function(item) {
        const tr = document.createElement("tr");
        cabecalho.forEach(function(campo) {
            const td = document.createElement("td");
            td.textContent = item[campo];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    return table;
}


// Evento de clique no botão fabricantes
document.getElementById("bt-fabricante").addEventListener("click", async function(event) {
    limparSections();
    document.querySelector("#fabricantes").style.display = "block";

    document.querySelector("#fabricantes").appendChild(criarTabela( await getData()));
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


