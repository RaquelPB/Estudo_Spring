const criarTabelaVeiculo = (dados) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria o título da tabela
    const trTitle = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Veículos";
    thTitle.colSpan = 6;
    trTitle.appendChild(thTitle);
    thead.appendChild(trTitle);

    // Cria o cabeçalho da tabela
    const cabecalho = ["Placa", "Ano", "Cor", "Modelo", "Fabricante", "Acão"];
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
            //placa
            const tdPlaca = document.createElement("td");
            tdPlaca.textContent = item.placa;
            tr.appendChild(tdPlaca);
    
            //ano
            const tdAno = document.createElement("td");
            tdAno.textContent = item.ano;
            tr.appendChild(tdAno);
    
            //cor
            const tdCor = document.createElement("td");
            tdCor.textContent = item.cor;
            tr.appendChild(tdCor);
    
            //modelo
            const tdModelo = document.createElement("td");
            tdModelo.textContent = item.modelo.nome;
            tr.appendChild(tdModelo);

            //fabricante
            const tdFabricante = document.createElement("td");
            tdFabricante.textContent = item.modelo.fabricante.nome;
            tr.appendChild(tdFabricante);
    
    
            tbody.appendChild(tr);
        });
    
    table.appendChild(tbody);

    //adiciona classe para estilizar a tabela
    table.classList.add("tabela-dados");
    table.appendChild(thead);

    return table;


}