import { useEffect, useState } from "react"
import Pokedex from "./Pokedex"
import './App.css';
import Pokedetail from "./Pokedetail";

function App() {
  const [details, setDetails] = useState({})

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={()=>{setDetails({})}}>HOME</button>
      {Object.keys(details).length < 1 ? <Pokedex setDetails={setDetails}/> : <Pokedetail details={details}/>}
    </>
  )
}

export default App
