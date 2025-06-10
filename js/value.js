document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('planSwitcher');
    const prices = document.querySelectorAll('.item-plan__price');
    const perTexts = document.querySelectorAll('.item-plan__per');

    switcher.addEventListener('change', function () {
        if (this.checked) {
            // Anual
            prices[0].textContent = 'R$490';
            prices[1].textContent = 'R$1.000';
            prices[2].textContent = 'R$2.500';
            perTexts.forEach((el) => (el.textContent = '/ano'));
        } else {
            // Mensal
            prices[0].textContent = 'R$49';
            prices[1].textContent = 'R$99';
            prices[2].textContent = 'R$249';
            perTexts.forEach((el) => (el.textContent = '/mês'));
        }
    });
});
