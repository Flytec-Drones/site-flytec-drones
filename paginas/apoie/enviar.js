(function() {
    // Inicializa o EmailJS com a sua Chave Pública
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY", // <-- SUBSTITUA AQUI
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const feedbackMessage = document.getElementById('feedback-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        feedbackMessage.style.display = 'none'; // Esconde a mensagem anterior
        feedbackMessage.className = ''; // Remove as classes de estilo

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                // Sucesso
                feedbackMessage.textContent = '✅ Sua mensagem foi enviada com sucesso!';
                feedbackMessage.classList.add('success');
                form.reset(); // Limpa o formulário
            }, function(error) {
                // Erro
                console.error('Falha ao enviar e-mail:', error);
                feedbackMessage.textContent = '❌ Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.';
                feedbackMessage.classList.add('error');
            });
    });
});