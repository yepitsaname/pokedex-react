import { useEffect, useState } from "react"
import Pokedex from "./Pokedex"
import './App.css';
import PokeDetail from "./PokeDetail";

function App() {
  const [details, setDetails] = useState({})

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={()=>{setDetails({})}}>HOME</button>
      {Object.keys(details).length < 1 ? <Pokedex setDetails={setDetails}/> : <PokeDetail details={details}/>}
    </>
  )
}

export default App
