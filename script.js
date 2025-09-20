document.addEventListener('DOMContentLoaded', () => {
    const notificationsContainer = document.getElementById('notifications-list');

    // Datos de ejemplo para las notificaciones
    const notificationsData = [
        {
            type: 'paid',
            title: '¡Cuota pagada!',
            message: 'Tu pago de la cuota 1 por un monto de $250.00 ha sido confirmado con éxito.',
            buttonText: 'Descargar comprobante',
            icon: 'fas fa-check-circle'
        },
        {
            type: 'pending',
            title: '¡Atención! Vencimiento próximo',
            message: 'La fecha límite para pagar tu cuota 2, por un monto de $250.00, es el 10 de octubre.',
            buttonText: 'Generar cupón',
            icon: 'fas fa-exclamation-triangle'
        },
        {
            type: 'overdue',
            title: '¡Cuota vencida!',
            message: 'Tu cuota 3, con un monto de $250.00, se encuentra vencida desde el 10 de noviembre.',
            buttonText: 'Pagar ahora',
            icon: 'fas fa-times-circle'
        }
    ];

    // Función para crear una tarjeta de notificación
    function createNotificationCard(notification) {
        const card = document.createElement('div');
        card.className = `notification-card ${notification.type}`;

        const iconHtml = `<div class="icon"><i class="${notification.icon}"></i></div>`;
        
        const contentHtml = `
            <div class="content">
                <h3>${notification.title}</h3>
                <p>${notification.message}</p>
            </div>
        `;
        
        const buttonHtml = `
            <button class="action-button">${notification.buttonText}</button>
        `;

        card.innerHTML = iconHtml + contentHtml + buttonHtml;

        // Añadir un evento al botón (opcional, para una funcionalidad real)
        const button = card.querySelector('.action-button');
        button.addEventListener('click', () => {
            alert(`Acción: ${notification.buttonText}`);
        });

        return card;
    }

    // Renderizar todas las notificaciones
    notificationsData.forEach(notification => {
        const card = createNotificationCard(notification);
        notificationsContainer.appendChild(card);
    });
});