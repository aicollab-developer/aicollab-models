function toggleTheme() {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    body.classList.toggle('dark-theme');
    sidebar.classList.toggle('dark-theme');
}