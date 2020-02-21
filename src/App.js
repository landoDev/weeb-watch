import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import './App.css';
import axios from 'axios';
// ADD BOOTSTRAP AND REACT STRAP TO GET THIS GOING FAST LANDO

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("https://api.jikan.moe/v3/top/anime")
    .then(response =>{
      console.log(response.data.top);
      setData(response.data.top);
    })
  },[])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
