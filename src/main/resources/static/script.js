
// Função fetch para obter dados da API
async function getData(url) {
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return response; 
        }

        const resultado = await response.json();
        return resultado;

    } catch (error) {
        return error;
    }
}


// função para deletar
async function setDelete(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });

    if (!response.ok) {
      return { error: true, status: response.status, message: response.statusText };
    }

    return { error: false, status: response.status };
  } catch (error) {

    return { error: true, message: error.message };
  }
}

//Verifica se a resposta é sucesso
function isSucess(response){
  return response && !response.error;
}

// função para requisições PUT

async function putData (url, data){
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    if (response.ok){
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("aplication/json")){
        return await response.json();
      }else {
        return await response.text();
      }
    }else {
      try{
        const error = await response.json();
        return { erro: true, status: response.status, ...erro};
      } catch {
        return {
          error: true, status: response.status, message: response.statusTect};
        }
      }
    } catch (erro) {
      return{ error: true, message:"Erro de conexão: " + error.message};
    }

}



// Mostrar erro especifico do backend
function mostrarErro(response) {
  if (response.message) {
    let mensagem = response.message;

    // tratamento específico para erros comuns
    if (response.status === 409) {
      mensagem = "Conflito de Dados!\n\n" + response.menssage + "\n\nEste registro já exixte no sistema ou há um conflito da informação";
    } else if (response.status === 500) {
      mensagem = "Erro no servidor\n\n" + response.message + "\n\nPor favor, contate o administrador do sistema";
    }

    //adiciona informações extras se disponivéis
    if(response.error && response.error !== response.message){
      mensagem += "\n\nTipo: " + response.error;
    }
    if(response.timestamp) {
      const data = new Data(response.timestamp).toLocaleString('pt-BR');
      mensagem += "\nHorário: " + data;
    }

    alert(mensagem);
  }else {
    alert("Erro desconhecido");
  }
}









