import { useState, useEffect } from "react";
import "./App.css"
import Axios from "axios";

function App(){
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse=(excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
      console.log(res.data)
    }).catch((error)=>{
      console.log(error.message)
    })
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={()=>fetchExcuse("party")}>Party</button>
      <button onClick={()=>fetchExcuse("family")}>Family</button>
      <button onClick={()=>fetchExcuse("office")}>Office</button>
    </div>
  )
}

 export default App;