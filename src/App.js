import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/json_data.json'
import Body from './components/Body/Body';


function App() {
const [clubs,setClubs]=useState([]);

useEffect(()=>{
  setClubs(data)
},[])
  return (
    <div className="App">
      <h1>Total data: {data.length}  </h1>
      {
        clubs.map(club=> <Body club={club}></Body> )
      }
 
    
     
    </div>
  );
}

export default App;
