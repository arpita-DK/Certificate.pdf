const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; 

app.get('/download', (req, res) => {
  const filePath = 'certificate.pdf'; 
  const fileName = 'certificate.pdf'; 

 
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-type', 'application/pdf');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
