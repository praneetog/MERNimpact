const btn = document.getElementById("convert-btn");
const amountInput = document.getElementById('input');
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const resultDisplay = document.getElementById('result');

// Hypothetical conversion rates
const conversionRates = {
    'dollar': {
        'euro': 0.85,
        'pound': 0.75,
        'yen': 110
    },
    'euro': {
        'dollar': 1.18,
        'pound': 0.88,
        'yen': 130
    },
    'pound': {
        'dollar': 1.33,
        'euro': 1.14,
        'yen': 150
    },
    'yen': {
        'dollar': 0.0091,
        'euro': 0.0077,
        'pound': 0.0067
    }
};

btn.addEventListener('click', function() {
    const currency1 = dropdown1.value;
    const currency2 = dropdown2.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        resultDisplay.textContent = "Please enter a valid amount.";
        return;
    }

    if (currency1 === currency2) {
        resultDisplay.textContent = "You cannot convert the same currency.";
        return;
    }

    // Perform the conversion
    const rate = conversionRates[currency1][currency2];
    const convertedAmount = amount * rate;

    // Display the result
    resultDisplay.textContent = `${convertedAmount.toFixed(2)}`;
});