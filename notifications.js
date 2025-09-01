export function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icons = {
        info: 'fas fa-info-circle',
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle',
    };

    notification.innerHTML = `
        <div class="icon"><i class="${icons[type]}"></i></div>
        <div class="message">${message}</div>
    `;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
        notification.addEventListener('transitionend', () => notification.remove());
    }, 5000);
}
