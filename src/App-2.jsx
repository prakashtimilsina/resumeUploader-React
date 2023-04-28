import { useState, useEffect } from "react";
import "./App.css"
import Axios from "axios";


//  fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//   console.log(data)
//  })

 function App(){
  // Axios.get("https://catfact.ninja/fact").then((res)=>{
  //   console.log(res.data);
  // })
  const [catFact, setCatFact] = useState("");
  const fetchData = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatFact(res.data.fact);
    });
  }
  useEffect(()=> {
    fetchData();
  }, []);


  return (
    <div className="App">
      <button onClick={fetchData}> Generat Cat Fact </button>
      <p>{catFact}</p>
    </div>
  )
 }

 export default App;