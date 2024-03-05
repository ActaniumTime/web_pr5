document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('validateButton').addEventListener('click', function() {
        var phoneNumber = document.getElementById('phoneNumber').value;
        var regex = /^(8|\+7)?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;
        
        var resultElement = document.getElementById('result');
        if (regex.test(phoneNumber)) {
            resultElement.textContent = "Номер телефона валиден.";
        } else {
            resultElement.textContent = "Номер телефона невалиден.";
        }
    });
});
