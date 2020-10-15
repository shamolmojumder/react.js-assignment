import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/json_data.json'
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';


function App() {
const [clubs,setClubs]=useState([]);
const [cart,setCart]=useState([])

useEffect(()=>{
  setClubs(data)
},[])

const handleButton=(input)=>{
  const newCart=[...cart,input]
  setCart(newCart)
};

  return (
    <div className="App">
      <h1>Total data: {data.length}  </h1>
      <h1>Totoal add: {cart.length} </h1>
      <Cart cart={cart}></Cart>
      {
        clubs.map(club=> <Body club={club} handleButton={handleButton} key={club.phone} ></Body> )
      }
 
    
     
    </div>
  );
}

export default App;
