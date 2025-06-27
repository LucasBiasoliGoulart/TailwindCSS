// Login
function validarCampos() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    
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
    if(!textoValido) {
        textoCampo.classList.add('border-red-500');
    }
    if(emailValido && senhaValida) {
        alert('Tudo certo! enviado...');
    }
}

// Contato
function Enviar() {
    const nomeInput = document.getElementById('nome');
    const email = document.getElementById('email');
    const textoCampo = document.getElementById('texto');

    let nomeValido = nomeInput.value.trim() !== '';
    let emailCorret = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    let textoValido = textoCampo.value.trim() !== '';

    // Resetar estilos
    [nomeInput, email, textoCampo].forEach(el => {
        el.classList.remove('border-red-500');
        el.classList.add('border-gray-300');
    });

    // Aplicando o vermelho se for inválido e remove cinza
    if(!nomeValido) {
        nomeInput.classList.add('border-red-500');
        nomeInput.classList.remove('border-gray-300');
    }
    if(!emailCorret) {
        email.classList.add('border-red-500');
        email.classList.remove('border-gray-300');
    }
    if(!textoValido) {
        textoCampo.classList.add('border-red-500');
        textoCampo.classList.remove('border-gray-300');
    }
    if (nomeValido && emailValido && textoValido) {
        alert('Tudo certo! enviado...');
    }
}