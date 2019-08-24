import React from 'react';

const fetchData = async () =>
   await (await fetch('/.netlify/functions/airtable/airtable.js')).json();

fetchData().then(data => {console.log( data )})

function App() {

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
