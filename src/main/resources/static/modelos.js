const criarTabelaModelo = (dados) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria o título da tabela
    const trTitle = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Modelos";
    thTitle.colSpan = 3;
    trTitle.appendChild(thTitle);
    thead.appendChild(trTitle);

    // Cria o cabeçalho da tabela
    const cabecalho = ["Modelo", "Fabriante", "Pais de Origem"];
    const tr = document.createElement("tr");
    cabecalho.forEach((campo) => {
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });
    thead.appendChild(tr);


    //cria o corpo da tabela
    dados.forEach((item) => {
        const tr = document.createElement("tr");
            //modelo
            const tdModelo = document.createElement("td");
            tdModelo.textContent = item.nome;
            tr.appendChild(tdModelo);
    
            //fabricante
            const tdFabricante = document.createElement("td");
            tdFabricante.textContent = item.fabricante ? item.fabricante.nome : "N/A";
            tr.appendChild(tdFabricante);
    
            //pais de origem
            const tdPais = document.createElement("td");
            tdPais.textContent = item.fabricante ? item.fabricante.paisOrigem : "N/A";
            tr.appendChild(tdPais);
    
            tbody.appendChild(tr);
        });
    
    //adiciona classe para estilizar a tabela
    table.classList.add("tabela-dados");
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}