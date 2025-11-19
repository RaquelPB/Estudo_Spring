
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



