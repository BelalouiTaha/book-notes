import react, { useState, useEffect } from 'react';

function App() {

  const getData = ()=>{
    fetch('/api/user')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  
  useEffect(()=>{
    getData()
  }, []);
  return (
    <div className="App">
     <h1>hello from backend</h1>
    </div>
  );
}

export default App;
