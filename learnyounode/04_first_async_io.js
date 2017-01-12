var processArgv = process.argv[2];
var fs = require('fs');

fs.readFile(processArgv, finishedReading);

function finishedReading(err, processArgv) {
	var toAstring = processArgv.toString();
	var result = toAstring.split('\n').length;
	console.log(result - 1);
}

//official solution
    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })