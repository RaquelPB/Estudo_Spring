
// Função fetch para obter dados da API
async function getData(url) {
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const dados = await response.json();
        return dados;

    } catch (error) {
        console.error("Erro ao obter os dados: ", error);
    }
}