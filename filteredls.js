var fs = require('fs');
var path = require('path');

dirPath = process.argv[2];
extension = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list){
    
    if (err) {
        return console.error(err);
    }

    for (file of list){
        if (path.extname(file) === extension) {    
            console.log(file);    
        }
    }
    
});