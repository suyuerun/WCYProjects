// var fs = require('fs');
// var csv = require('csv');
// var jsUtils = module.exports;
// csv.from.stream(fs.createReadStream(__dirname + '/doc/item.csv'));
// csv.to.path(__dirname + '/sample.out');
// csv.transform(function (row) {
//     row.unshift(row.pop());
//     return row;
// });
// csv.on('record', function (row, index) {
//     console.log('#' + index + ' ' + JSON.stringify(row));
// });
// csv.on('close', function (count) {
//     // when writing to a file, use the 'close' event
//     // the 'end' event may fire before the file has been written
//     console.log('Number of lines: ' + count);
// });
// csv.on('error', function (error) {
//     console.log(error.message);
// });

