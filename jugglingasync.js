const http = require('http')
	, bl   = require('bl')
	, fs   = require('fs')

urls = process.argv.slice(2);
allData = [];
// urls = [];
// console.log(urls);
fs.writeFile('urls.txt', urls, function(){
	// console.log("File saved");
});

count = 0;

// for (var i = 2; i < process.argv.length; i++) {
//   urls.push(process.argv[i]);
// }

function getData(index) {
	http.get(urls[index], function(response){
		response.pipe(bl(function(err, data){
			if(err){
				console.error(err);
			}
			// console.log("index: ", index);
			allData[index] = data.toString();
			// console.log(allData);

			// console.log(data.length);
			// console.log(data);
			count++;
			// console.log("count: ", count);

			if(count === 3) {
				allData.forEach(function(response){
					console.log(response);
				});
			}

		}));
	});
}

for (var i = 0; i < urls.length; i++) {
	getData(i);
}

// console.log(allData);