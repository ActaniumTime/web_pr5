document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('showFolders').addEventListener('click', function() {
        var filePath = document.getElementById('filePath').value;
        filePath = filePath.replace(/\\/g, '/');
        var folders = filePath.split('/');
        folders = folders.filter(function(folder) {
            return folder.trim() !== '';
        });
        var foldersList = document.getElementById('foldersList');
        foldersList.innerHTML = '';
        folders.forEach(function(folder) {
            var listItem = document.createElement('li');
            listItem.textContent = folder;
            foldersList.appendChild(listItem);
        });
    });
});
