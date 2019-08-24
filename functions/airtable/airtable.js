// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');

// SERVERLESS FUNCTION
exports.handler = async (event, context, callback) => {
  // pull the required enviroment variables from netlify UI
  const {API_BASE_ID, API_KEY} = process.env;
  // function formats and sends reponse back to the front-end
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }
  Airtable.configure({
    endpointUrl: `https://api.airtable.com/v0/${API_BASE_ID}/Clientes/recVLS4iOZLrFDrSn`,
    apiKey: API_KEY
  })
  const base = Airtable.base(API_BASE_ID);
  
  let data = ['0']

  send(data);
};
