function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleButton = document.querySelector('.toggle-button');

    if (sidebar.style.width === '60px') {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        toggleButton.innerHTML = '☰';
    } else {
        sidebar.style.width = '60px';
        content.style.marginLeft = '60px';
        toggleButton.innerHTML = '☰';
    }
}