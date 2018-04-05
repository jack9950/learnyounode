var listFiles = require('./listfiles.js')

dirPath = process.argv[2];
fileExtension = process.argv[3];

data = listFiles(dirPath, fileExtension, displayData);

function displayData (err, data) {
    if (err) {
        return console.error(err);
    }

    data.forEach(function(filename){
        console.log(filename);
    });
}
