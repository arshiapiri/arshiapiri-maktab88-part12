const docxConverter = require('docx-pdf');

docxConverter('./abc.docx','./output.pdf', (err, result) => {
  if (err) console.log(err);
  else console.log(result); 
});