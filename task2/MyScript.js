document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('b1').addEventListener('click', extract);
})

function extract(){
    var str1 = document.getElementById('inputLabel').value;
    var str2 = "";
    var result = CopyNumbers(str1,str2);
    var Block = document.getElementById('resBlock');
    Block.innerHTML = `All digits : ${result} `;
}

function CopyNumbers(Str1, Str2){
    var temp = Str1.match(/\d+/g);
    if(temp){
        Str2 +=temp.join("");
    }
    return Str2;
}