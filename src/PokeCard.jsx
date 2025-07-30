import{ useEffect, useState } from 'react';
import './PokeCard.css';

export default function PokeCard({url, setDetails}){
  const [pokeData, setPokeData] = useState({});

  useEffect(()=>{
    fetch(url)
      .then(response => {
        if( response.status == 200 ) { return response.json() }
        else{ throw new Error(response.status) }
      })
      .then( data => setPokeData(data) )
      .catch( error => console.log(error) )
  },[])

  if(Object.keys(pokeData).length < 1){
    return (
      <div className="pokecard">
        <img alt='loading' src='/src/img/loading-spinner.gif'></img>
        <h4>LOADING</h4>
      </div>
    )
  }

  return (
    <div className={"pokecard " + pokeData.types[0].type.name} onClick={() => { setDetails(pokeData) }}>
      <div className={"pokecard-wrapper " + (pokeData.types[1] ? pokeData.types[1].type.name : "")}></div>
      <img alt={pokeData.name} src={pokeData.sprites.front_default}></img>
      <h4>{pokeData.name}</h4>
    </div>
  )
}