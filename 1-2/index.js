const docxConverter = require('docx-pdf');

docxConverter('./input.docx','./output.pdf', (err, result) => {
  if (err) console.log(err);
  else console.log(result); 
});