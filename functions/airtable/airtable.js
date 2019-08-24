const axios = require("axios")
// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');

// SERVERLESS FUNCTION
exports.handler =  (event, context, callback) => {
  // pull the required enviroment variables from netlify UI
  const {API_BASE_ID, API_KEY} = process.env;
  // function formats and sends reponse back to the front-end
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }
  
  // CONFIGURE AIRTABLE API
  Airtable.configure({
    apiKey: API_KEY
  })

  const base = Airtable.base(API_BASE_ID)

  base('Clientes').select({
    view: "BD"
  }).firstPage((err, records) => {
    if (err) { 
      console.error('error :', err); 
      send(err)
    }
    send(records)
  });
};
