var fs = require('fs');
filepath = process.argv[2];

data = fs.readFileSync(filepath, 'utf8');

data = data.split('\n');

console.log(data.length -1);