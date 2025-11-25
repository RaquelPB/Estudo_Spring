
/*
    Função para mostrar e ocultar elementos
    Parametros:
    esconder: boolean - true para esconder, false para mostrar
    elemento: string - classe ou id do elemento a ser manipulado
    Exemplo de uso:
    setMostrarOcutarElemento(true, ".minha-classe");
*/
const setMostrarOcutarElemento = function(esconder, elemento) {
    document.querySelectorAll(elemento).forEach(function(section) {
        section.style.display = esconder ? "none" : "block";
    });
}

const setRemoverElementos = function(elemento) {
    document.querySelectorAll(elemento).forEach(function(item) {
        item.remove();
    });
}


// botão editar
const btnEditar = document.createElement("button")
btnEditar.textContent = "Editar"
btnEditar.classList.add("btn", "edit");
btnEditar.style.cursor = "pointer";
btnEditar.addEventListener("click", async function name(event) {
    alert("Função de editar para o item ID: " + item.id);
    
});

// botão excluir
const btnExcluir = document.createElement("button")
btnExcluir.textContent = "Excluir"
btnEditar.classList.add("btn", "excluir");
btnExcluir.style.cursor = "pointer";
btnExcluir.addEventListener("click", async function name(event) {
    if(confirm("Tem certeza que deseja excluir este item?")){
        const resposta = await setDelete("http://localhost:8080/api/fabricantes")
        
        if(resposta.success){
            tr.remove();
            alert(resposta.message);
        }else {
            mostrarErro(resposta);
        }
    }
});




