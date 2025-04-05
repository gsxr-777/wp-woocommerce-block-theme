document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.querySelector('#dark-mode-switch');

    if (!darkModeSwitch) {
        console.error('Dark mode switch not found!');
        return;
    }

    // Установка начальной темы
    const currentTheme = localStorage.getItem('theme') || 'light';
    console.log('Current theme from localStorage:', currentTheme);

    document.documentElement.setAttribute('data-theme', currentTheme);
    darkModeSwitch.checked = currentTheme === 'dark';

    // Слушатель событий для переключателя
    darkModeSwitch.addEventListener('change', function () {
        if (darkModeSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light theme');
        }
    });
});
