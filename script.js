const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.nav-menu');

// Função para abrir/fechar o menu
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

// ========= Fechar o menu ao clicar em um link =========
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('ativo')) {
            menuHamburguer.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        }
    });
});

// ===================================================
// Lógica para o Formulário de Contato com SweetAlert2
// ===================================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mensagem criativa do alerta
    const mensagemDeSucesso = "Seu orçamento foi enviado com sucesso! 🎉 Já estamos pré-aquecendo o forno para suas ideias. Entraremos em contato em breve! 🎂✨";
    
    // Configurações do SweetAlert2 com estilo personalizado
    Swal.fire({
        title: 'Pedido Recebido!',
        text: mensagemDeSucesso,
        icon: 'success', // Ícone de sucesso padrão do SweetAlert2
        confirmButtonText: 'Que delícia!',
        showCloseButton: true, // ADIÇÃO: Ícone de fechar no canto superior direito
        customClass: {
            popup: 'swal2-custom-popup', 
            title: 'swal2-custom-title', 
            htmlContainer: 'swal2-custom-html-container', // Adicionado para estilizar o texto
            confirmButton: 'swal2-custom-button', // Classe para customizar o botão
            closeButton: 'swal2-custom-close-button' // ADIÇÃO: Classe para customizar o botão de fechar (o 'X')
        },
        buttonsStyling: false, // Desativa o estilo padrão dos botões para usar customClass
        background: 'var(--cor-fundo)', 
        color: 'var(--cor-texto)', 
        iconColor: 'var(--cor-principal)' 
    });

    // Limpa todos os campos do formulário para um novo envio
    contactForm.reset();
});