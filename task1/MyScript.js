document.getElementById("b1").addEventListener("click", function() {
    var inputName = document.getElementById("InputName").value;
    var list = ["Кузьмин Иван", "Петров Петр", "Федоров Иван"];
    var nameSurname = inputName.split(" ");
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
});
