function mostrarSecao(secaoid) {
    document.querySelectorAll('.section').forEach(secao => {
        secao.style.display = 'none';
    });

    document.getElementById(secaoid).style.display = 'block';
}

document.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
        switch(this.id) {
            case "bt-fabricante":
                mostrarSecao('fabricantes');
                break;
            case "bt-modelo":
                mostrarSecao('modelos');
                break;
            case "bt-veiculo":
                mostrarSecao('veiculos');
                break;
        }
    }
)});
