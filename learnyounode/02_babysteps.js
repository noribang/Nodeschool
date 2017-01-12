var addNum = 0;
var argNum = process.argv;

for(i = 2; i < process.argv.length; i++) {
	addNum += Number(argNum[i]);
}

console.log(addNum);