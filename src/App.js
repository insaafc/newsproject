import React, { useEffect, useState } from 'react'
import './App.css';
import Results from './Results.js'


function App() {


// Authentification request
  const API_KEY = "8739af1f54704288a7bb206d263cbb2c";


//set useState to data return from api, set to an array [] of obj 
const [results, setResults] = useState([]);

// need to add getResults to useEffect in order for it to run
useEffect(() => {
  getResults()
  
}, []);

// getResults Request from api that makes async calls and awaits response and stores it in the data file 
// add await for data that returns from external source
const getResults = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`)
  const data = await response.json();
  setResults(data.articles);
  console.log(data.articles);
}
  return (
<div className="App">
{results.map(results =>(
  <Results key={results.combinedKey}
  {...results}/>
))}
</div>
  );
}

export default App;
