// Função de Login
function validarCampos() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const textoCampo = document.getElementById('texto');
    
    let emailValido = emailInput.value.includes('@');
    let senhaValida = senhaInput.value.length >= 6;

    // Resetar bordas
    emailInput.classList.remove('border-red-500');
    senhaInput.classList.remove('border-red-500');

    // Se inválido, adiciona borda vermelha
    if(!emailValido) {
        emailInput.classList.add('border-red-500');
    }
    if(!senhaValida) {
        senhaInput.classList.add('border-red-500')
    }
    if(emailValido && senhaValida) {
        alert('Tudo certo! enviado...');
    }
}