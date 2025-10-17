const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.nav-menu');

// Função para abrir/fechar o menu
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

// ========= NOVO: Fechar o menu ao clicar em um link =========
// Seleciona todos os links dentro do menu
const navLinks = document.querySelectorAll('.nav-menu a');

// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se o menu está ativo (aberto)
        if (navMenu.classList.contains('ativo')) {
            // Remove a classe 'ativo' para fechar o menu e reverter o ícone
            menuHamburguer.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        }
    });
});

// ===================================================
// Lógica para o Formulário de Contato
// ===================================================

// Seleciona o formulário pelo ID que demos a ele no HTML
const contactForm = document.getElementById('contact-form');

// Adiciona um "ouvinte" que espera pelo evento de "submit" (envio)
contactForm.addEventListener('submit', function(event) {
    // 1. Previne o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // 2. A MENSAGEM CRIATIVA DO ALERTA!
    const mensagemDeSucesso = "Seu orçamento foi enviado com sucesso! 🎉 Já estamos pré-aquecendo o forno para suas ideias. Entraremos em contato em breve! 🎂✨";
    
    // 3. Exibe o alerta para o usuário
    alert(mensagemDeSucesso);

    // 4. Limpa todos os campos do formulário para um novo envio
    contactForm.reset();
});