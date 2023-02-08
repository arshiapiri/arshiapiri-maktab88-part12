const fs = require("fs");
const pngToJpeg = require('png-to-jpeg');
 
let buffer = fs.readFileSync("./some-file.png");
pngToJpeg({quality: 90})(buffer)
.then(output => fs.writeFileSync("./some-file.jpeg", output));