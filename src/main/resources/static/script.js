
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
    const dadosFabricantes = [
        { ID: 1, nome: "Ford", pais: "Estados Unidos" },
        { ID: 2, nome: "Toyota", pais: "Japão" },
        { ID: 3, nome: "Volkswagen", pais: "Alemanha" }
    ];
    document.querySelector("#fabricantes").appendChild(criarTabela(dadosFabricantes));
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

// Função para criar uma tabela a partir de um array de objetos

function criarTabela(dados) { 

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //criar o cabeçalho da tabela

    const cabecalho = Object.keys(dados[0]);


    const tr = document.createElement("tr");
    cabecalho.forEach(function(campo) {
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });
    
    thead.appendChild(tr);
    table.appendChild(thead);

    //criar o corpo da tabela

    dados.forEach(function(item) {
        const tr = document.createElement("tr");
        cabecalho.forEach(function(campo) {
            const td = document.createElement("td");
            td.textContent = item[campo];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    tbody.appendChild(tr);
    table.appendChild(tbody);
    return table;
}

