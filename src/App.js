import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './components/data/data.json'
import Body from './components/Body/Body';

function App() {
  console.log(data);



  return (
    <div className="App">

      <Body data={data}></Body>
      <ul>
        {
          data.map(dat=> <li> {dat.fullname} </li> )
        }
      </ul>
    </div>
  );
}

export default App;
