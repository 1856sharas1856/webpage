// Statuso spalvų konvertavimas
document.addEventListener('DOMContentLoaded', function() {
    // Automatinis datos lauko formatavimas
    const dateFields = document.querySelectorAll('input[type="date"]');
    dateFields.forEach(field => {
        if (!field.value) {
            const today = new Date().toISOString().split('T')[0];
            field.value = today;
        }
    });

    // Rodyti įspėjimus 5 sekundes
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.classList.add('fade');
            setTimeout(() => alert.remove(), 150);
        }, 5000);
    });
});