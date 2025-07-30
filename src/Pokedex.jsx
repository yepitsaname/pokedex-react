import { useEffect, useState } from "react";
import Pokecard from "./Pokecard";

export default function Pokedex(){
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => {
        if( response.status == 200 ) { return response.json() }
        else{ throw new Error(response.status) }
      })
      .then( data => setList(data.results) )
      .catch( error => console.log(error) )
  }, [])

  return (
    list.map( pokemon => <Pokecard key={pokemon.name} url={pokemon.url} />)

  )

}