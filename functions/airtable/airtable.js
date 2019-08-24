const axios = require("axios")
// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');
// PULL REQUIRED ENVIROMENT VARIABLES
const {API_BASE_ID, API_KEY} = process.env;
// CONFIGURE AIRTABLE API
Airtable.configure({
  apiKey: API_KEY
})
const base = Airtable.base(API_BASE_ID)

// SERVERLESS FUNCTION
exports.handler =  (event, context, callback) => {
  // function formats and sends reponse back to the front-end
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  base('Muestreo').select({
    view: "Muestreador",
  }).firstPage((err, records) => {
    if (err) { 
      send(err)
    }
    let data = []
    records.forEach( record => data.push(record.fields))
    send(data)
  });
};
