var fs = require('fs');

filepath = process.argv[2];

fs.readFile(filepath, 'utf8', function(err, data){
    data = data.split('\n');
    console.log(data.length - 1);
})