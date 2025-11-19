const criarTabelaVeiculo = (dados) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria o título da tabela
    const trTitle = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Veículos";
    thTitle.colSpan = 7;
    trTitle.appendChild(thTitle);
    thead.appendChild(trTitle);

    // Cria o cabeçalho da tabela
    const cabecalho = ["Fabricante","Modelo", "Ano","Placa", "Cor", "Preço", "Acões"];
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

            //fabricante
            const tdFabricante = document.createElement("td");
            tdFabricante.textContent = item.modelo.fabricante.nome;
            tr.appendChild(tdFabricante);

            //modelo
            const tdModelo = document.createElement("td");
            tdModelo.textContent = item.modelo.nome;
            tr.appendChild(tdModelo);

            //ano
            const tdAno = document.createElement("td");
            tdAno.textContent = item.ano;
            tr.appendChild(tdAno);

            //placa
            const tdPlaca = document.createElement("td");
            tdPlaca.textContent = item.placa;
            tr.appendChild(tdPlaca);
    
    
            //cor
            const tdCor = document.createElement("td");
            tdCor.textContent = item.cor;
            tr.appendChild(tdCor);

            //preço
            const tdPreco = document.createElement("td")
            tdPreco.textContent = item.valor
            tr.appendChild(tdPreco)

            //botão deletar
            const tdDeletar = document.createElement("td")
            tdDeletar.innerHTML = '<button class="btn delete">Deletar<button/>';
            tdDeletar.addEventListener("click", async function(){
                if (confirm("Tem certeza que deseja excluir este veiculo?")){
                    const resultado = await setDelete(`http://8080/api/veiculos/${item.id}`);

                    if (isSucess(resultado)){
                        this.parentElement.remove();
                        alert("Veiculo excluído com sucesso")
                    }else{
                        mostrarErro(resultado);
                    }
                }
            })

    
            tbody.appendChild(tr);
        });
    
    table.appendChild(tbody);

    //adiciona classe para estilizar a tabela
    table.classList.add("tabela-dados");
    table.appendChild(thead);

    return table;


}