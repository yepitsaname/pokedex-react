import { useEffect, useState } from "react"

export default function Pokedetail({details}){
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
    <div className="pokedetail">Pokedetail
      <h3>{details.name}</h3>
      <img alt={details.name} src={details.sprites.front_default}/>
      <div>
        {details.types.map( type => <p key={`${details.name}-poketype-${type.type.name}`} className={`type ${type.type.name}`}>{type.type.name}</p>)}
      </div>
      <p>{flavorText}</p>
      <p>Ht: {Math.round(details.height * 3.281) / 10}ft Wt: {Math.floor(details.weight * 2.205) / 10}lbs</p>
      <ul>
        {details.moves.map( move => <li key={move.move.name}>{move.move.name}</li>)}
      </ul>
    </div>
  )
}