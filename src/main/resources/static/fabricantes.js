function criarTabelaFabricante(dados) {
   
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria o título da tabela
    const trTitle = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Fabricantes";
    const cabecalho = Object.keys(dados[0]);
    thTitle.colSpan = cabecalho.length;
    trTitle.appendChild(thTitle);
    thead.appendChild(trTitle);

    // Cria o cabeçalho da tabela
    const tr = document.createElement("tr");


    cabecalho.forEach(function(campo) {
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    // Cria o corpo da tabela
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

    //adiciona classe para estilizar a tabela
    table.classList.add("tabela-dados");

    return table;
}