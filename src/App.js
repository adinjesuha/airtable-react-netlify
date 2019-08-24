import React, { useState, useEffect } from 'react';

function App() {
  const [muestreo, setMuestreo] = useState([])
  useEffect(() => {
    const fetchData = async () =>
      await (await fetch("/.netlify/functions/airtable/airtable.js")).json();
    fetchData().then( data => {
      setMuestreo(data)
    })
  }, [])
  return muestreo.length === 0 ? (<div><h1>Loading...</h1></div>) : (
    <div className="App">
      <h1>Plan de Muestreo</h1>
      <ul>
        {muestreo.map(muestra => <li key={muestra.ID}><div>
          <h2>Cliente: {muestra.Cliente}</h2>
          <p>Muestra: {muestra.Muestra}</p>
          <p>Dias restantes: {muestra.DiasRestantes}</p>
        </div></li>)}
      </ul>
    </div>
  );
}

export default App;