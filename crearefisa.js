function crearefisier() {
  var numefisa = document.getElementById('numespagina').value; // aici ia numele de titlu din formular
  var merge = gapi.client.sheets.spreadsheets.create({ //creaza fisierul cu variablial de mai sus
  properties: {
    title: numefisa
    }
},);

merge.then(function(response) { // aici primesc raspuns cu datele generate
  // TODO: Change code below to process the `response` object:
  console.log(response.result.spreadsheetId); // ASTA e IMPORTANT - e imi da ID-ul Spreadsheet-ului creat ce tb sa fie facut variabila ca sa-l trec mai jos
}, function(reason) {
  //console.error('error: ' + reason.result.error.message);
});

  var clonaid = document.getElementById('idclona').value;
  var params = {
    spreadsheetId: '1fNRFjCZg3rSMzgRjktgNPzwxM2PUxwnZdgxNvPIBXOQ', 
    sheetId: 881514470,
  };

  var copySheetToAnotherSpreadsheetRequestBody = {
    destinationSpreadsheetId: , // aici trebuie sa apelez variabila de mai sus.
  };

  var request = gapi.client.sheets.spreadsheets.sheets.copyTo(params, copySheetToAnotherSpreadsheetRequestBody);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    //console.log(response.result);
  }, function(reason) {
    //console.error('error: ' + reason.result.error.message);
  });
}
