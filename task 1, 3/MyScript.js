document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('b1').addEventListener('click', function() {
        replaceName();
    });

    document.getElementById('b2').addEventListener('click', function() {
        extractAndDisplay();
    });
});

function replaceName() {
    var inputName = document.getElementById("InputName").value;
    var list = ["Кузьмин Иван", "Петров Петр", "Федоров Иван"];
    var index = list.indexOf(inputName);
    if (index !== -1) {
        list[index] = "Иванов Иван";
        alert("Данные заменены!");
    } else {
        alert("Введенные данные не найдены в списке.");
    }
    
    var outputList = document.getElementById("outputList");
    outputList.innerHTML = ""; 
    list.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        outputList.appendChild(li);
    });
}

function extractAndDisplay() {
    var inputName = document.getElementById("InputName").value;
    var nameSurnameRegex = /^(\S+)\s+(\S+)$/; 
    var match = inputName.match(nameSurnameRegex); 
    
    if (match) { 
        var surname = match[1]; 
        var firstName = match[2]; 
        alert("Фамилия: " + surname + "\nИмя: " + firstName);
    } else { 
        alert("Введите имя и фамилию, разделенные пробелом.");
    }
}
