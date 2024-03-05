document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('checkNumber').addEventListener('click', function() {
        var inputNumber = document.getElementById('inputNumber').value;
        var decimalRegex = /^(\d+)([.,](\d*))?$/;

        var match = inputNumber.match(decimalRegex);

        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ""; 

        if (match) {
            var integerPart = match[1];
            var fractionPart = match[3];
            var separator = match[2];

            var integerParagraph = document.createElement('p');
            integerParagraph.textContent = "Целая часть: " + integerPart;
            resultDiv.appendChild(integerParagraph);

            var fractionParagraph = document.createElement('p');
            fractionParagraph.textContent = "Дробная часть: " + fractionPart;
            resultDiv.appendChild(fractionParagraph);
        } else {
            var errorMessageParagraph = document.createElement('p');
            errorMessageParagraph.textContent = "Неправильный формат числа. Введите десятичную дробь или целое число.";
            resultDiv.appendChild(errorMessageParagraph);
        }
    });
});
