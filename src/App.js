import React, { useState, useEffect } from 'react';

function App() {
  const [clients, setClients] = useState([])
  useEffect(() => {
    const fetchData = async () =>
      await (await fetch("/.netlify/functions/airtable/airtable.js")).json();
    fetchData().then( data => {
      setClients(data)
    })
  }, [])
  console.log(clients)
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <ul>
        {clients.map(client => <li key={client.id}><div>
          <h2>{client.fields.Empresa}</h2>
          <p>{client.fields.Direccion}</p>
        </div></li>)}
      </ul>
    </div>
  );
}

export default App;