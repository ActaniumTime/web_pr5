document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('processButton').addEventListener('click', function() {
        var textInput = document.getElementById('textInput').value;
        var words = textInput.split(/\s+/); 

        var output = "";
        words.forEach(function(word) {
            if (word.length >= 15) {
                output += "абстр…ние "; 
            } else {
                output += word + " ";
            }
        });

        document.getElementById('output').textContent = output.trim(); 
    });
});
