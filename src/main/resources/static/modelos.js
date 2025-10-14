const criarTabelaModelo = (dados) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria o cabeçalho da tabela
   const trTitle = document.createElement("tr");
   const th = document.createElement("th");
   th.textContent = "Modelos";
   th.colSpan = 3;
   trTitle.appendChild(th);
   thead.appendChild(trTitle); 

    const cabecalho = ["Modelo", "Fabriante", "Pais de Origem"];
    const tr = document.createElement("tr");
    cabecalho.forEach((campo) => {
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });


    //cria o corpo da tabela
    dados.forEach((item) => {
        const tr = document.createElement("tr");
            //modelo
            const tdModelo = document.createElement("td");
            tdModelo.textContent = item.nome;
            tr.appendChild(tdModelo);
    
            //fabricante
            const tdFabricante = document.createElement("td");
            tdFabricante.textContent = item.fabricante.nome;
            tr.appendChild(tdFabricante);
    
            //pais de origem
            const tdPais = document.createElement("td");
            tdPais.textContent = item.paisDeOrigem;
            tr.appendChild(tdPais);
    
            tbody.appendChild(tr);
        });
    
    table.appendChild(tbody);

    //adiciona classe para estilizar a tabela
    table.classList.add("tabela-dados");
    table.appendChild(thead);

    return table;
}