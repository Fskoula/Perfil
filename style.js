const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Verifica tema salvo no localStorage
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Salvar no localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

function alterarNome() {
    let bemVindo = document.getElementById("alterar");
    let campo = document.getElementById("campoTexto");
    
    bemVindo.innerHTML = "<h3>Olá, "+campo.value+"!</h3>";
}

function validarEnvio() {
    const emailUsuario = document.getElementById("email").value;
    const recadoUsuario = document.getElementById("recado").value;
    
    alert("Recebemos seu email: " +emailUsuario+ "\ne recado: " +recadoUsuario+"\nObrigada!");
    location.reload();
}
