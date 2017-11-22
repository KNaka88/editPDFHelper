const fs = require('fs'),
      http = require('http'),
      request = require('request'),
      pdfFile = process.argv[2],
      jsonFile = process.argv[3],
      pdfData = fs.readFileSync(pdfFile);

const base64Data = pdfData.toString('base64');

fs.readFile(jsonFile, function(err, data) {
  const json = JSON.parse(data);
  json['base64'] = base64Data;

  fs.writeFile(jsonFile, JSON.stringify(json), (err) => {
    if (err) throw err;

    console.log(`PDF Data is added on ${jsonFile}`);

    request({
        method: 'POST',
        uri: 'https://YOUR-ACCOUNT.execute-api.us-west-2.amazonaws.com/latest/generate-pdf',
        'content-type': 'application/json',
        json: json,
        encoding: null,
        aws: {
          key: 'YOUR-KEY',
          secret:'YOUR-SECRET-KEY'
        }
    }, (err, res, body) => {
        if (err) throw err;
        let finishedData  = new Buffer(body.toString('utf-8'), "base64");

        fs.writeFile(`editted-${pdfFile}`, finishedData, (err) => {
          if (err) throw err;
          console.log("Successfully created");
        });
      }
    );
  });
});
