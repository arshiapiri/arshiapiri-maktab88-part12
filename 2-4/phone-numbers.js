const fs = require('fs')

let numbers = []
let names = []
let result = []

fs.readFile('numbers.txt','utf-8',function(err,data) {
    console.log(data);
})