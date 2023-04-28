import { useState, useEffect } from "react";
import "./App.css"
import Axios from "axios";

function App(){
  const [name, setName] = useState("");
  const [predicatedAge, setPredicatedAge] = useState(0);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredicatedAge(res.data.age);
    })
  }


  return (
<div className="App">
  <input type="text" placeholder="Ex. Your Name" onChange={(e)=>{setName(e.target.value)}}/>
  <button onClick={fetchData}>Predict Age</button>
  <h1>Predicted Age: {predicatedAge}</h1>
</div>

  )
}

 export default App;