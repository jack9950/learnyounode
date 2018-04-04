var net = require('net');

port = process.argv[2];

var server = net.createServer(function(socket){

	var date = new Date();

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	month = month.toString();
	month =  month.length === 1 ? "0" + month : month;

	var day = date.getDate().toString();
	day = day.length === 1 ? "0" + day : day;

	var hour = date.getHours().toString();
	hour = hour.length === 1 ? "0" + hour: hour;

	var minute = date.getMinutes().toString();
	minute = minute.length === 1 ? "0" + minute: minute;

	var fullDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";

	socket.write(fullDate);
	console.log("\n");
	socket.end();
});

server.listen(port);


// console.log(fullDate);

