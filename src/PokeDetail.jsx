import { useEffect, useState } from "react"
import './PokeDetail.css'
import PokeMove from "./PokeMove"
import PokeRadarChart from "./PokeRadarChart"

export default function PokeDetail({details}){
  const [flavorText, setFlavorText] = useState('Loading')

  useEffect(()=>{
    fetch(details.species.url)
      .then(response => {
        if( response.status == 200 ) { return response.json() }
        else{ throw new Error(response.status) }
      })
      .then( data => setFlavorText(data.flavor_text_entries[0].flavor_text.replace('\n', ' ').replace('\f', ' ')) )
      .catch( error => console.log(error) )
  },[])

  return (
    <div className="pokedetail">
      <div className={"banner " + details.types[0].type.name}>
        <div className={"banner-overlay " + (details.types[1] ? details.types[1].type.name : "")}></div>
        <h3>{details.name}</h3>
        <img alt={details.name} src={details.sprites.front_default}/>
        <div className="type-wrapper">
          {details.types.map( type => <p key={`${details.name}-poketype-${type.type.name}`} className={`type ${type.type.name}`}>{type.type.name}</p>)}
        </div>
        <PokeRadarChart stats={details.stats}/>
      </div>
      <p>{flavorText}</p>
      <p>Ht: {Math.round(details.height * 3.281) / 10}ft Wt: {Math.floor(details.weight * 2.205) / 10}lbs</p>
      <h3>Moves</h3>
      <div className="pokemovelist">
        {details.moves.map( move => <PokeMove key={move.move.name} move={move.move}/>)}
      </div>
    </div>
  )
}