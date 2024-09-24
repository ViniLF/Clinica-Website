const toggleThemeButton = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Verificar o tema inicial e ajustar o ícone
const setThemeIcon = () => {
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'images/moon-stars-fill.svg';
        themeIcon.alt = 'Alternar para modo claro';
    } else {
        themeIcon.src = 'images/brightness-high-fill.svg';
        themeIcon.alt = 'Alternar para modo noturno';
    }
};

// Alternar o tema e o ícone quando o botão for clicado
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    setThemeIcon();
});

// Definir o ícone correto ao carregar a página
setThemeIcon();
