import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {"Alex"} 
      lastName = {"Tate"}
      age = {23}
      hairColor = {"Brown"}
      />
      <PersonCard 
      firstName = {"Julia"} 
      lastName = {"Tate"}
      age = {22}
      hairColor = {"Brown"}
      />
      <PersonCard 
      firstName = {"Bob"} 
      lastName = {"Evans"}
      age = {66}
      hairColor = {"Brown"}
      />
    </div>
  );
}

export default App;
