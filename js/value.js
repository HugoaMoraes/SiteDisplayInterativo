document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('planSwitcher');
    const prices = document.querySelectorAll('.item-plan__price');
    const perTexts = document.querySelectorAll('.item-plan__per');

    function updatePrices() {
        if (switcher.checked) {
            // Anual
            prices.forEach((price) => {
                price.textContent = 'R$' + price.getAttribute('data-year');
            });
            perTexts.forEach((el) => (el.textContent = '/ano'));
        } else {
            // Mensal
            prices.forEach((price) => {
                price.textContent = 'R$' + price.getAttribute('data-month');
            });
            perTexts.forEach((el) => (el.textContent = '/mês'));
        }
    }

    // Atualiza ao carregar a página
    updatePrices();

    // Atualiza ao alternar o switcher
    switcher.addEventListener('change', updatePrices);
});
