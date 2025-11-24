
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








