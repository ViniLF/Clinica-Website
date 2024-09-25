const toggleThemeButton = document.querySelector('.theme-toggle');
const themeIcon = toggleThemeButton.querySelector('span'); // Seleciona o span que contém o ícone

// Verificar o tema inicial e ajustar o ícone
const setThemeIcon = () => {
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.textContent = 'light_mode'; // Troca para o ícone de modo claro
        themeIcon.setAttribute('aria-label', 'Alternar para modo claro'); // Adiciona um rótulo acessível
    } else {
        themeIcon.textContent = 'dark_mode'; // Troca para o ícone de modo escuro
        themeIcon.setAttribute('aria-label', 'Alternar para modo noturno'); // Adiciona um rótulo acessível
    }
};

// Alternar o tema e o ícone quando o botão for clicado
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    setThemeIcon(); // Atualiza o ícone após a mudança de tema
});

// Definir o ícone correto ao carregar a página
setThemeIcon();
