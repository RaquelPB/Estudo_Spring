function criarTabelaFabricante(dados) {
   
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    

    // Cria o cabeçalho da tabela
    const cabecalho = Object.keys(dados[0]);
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

    return table;
}