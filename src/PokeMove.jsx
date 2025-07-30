import { useEffect, useState } from 'react'
import './PokeMove.css'
import PokeMoveDetail from './PokeMoveDetail';

export default function PokeMove({move}){
  const [moveData, setMoveData] = useState({});
  const [showData, toggleShowData] = useState(false);

  useEffect(()=>{
    fetch(move.url)
      .then(response => {
        if( response.status == 200 ) { return response.json() }
        else{ throw new Error(response.status) }
      })
      //.then( data => setMoveData(data) )
      .catch( error => console.log(error) )
  },[])

  if( Object.keys(moveData) < 1 ){ return <div className="pokemove-wrapper"><p className="pokemove default">{move.name.replace("-", " ")}</p></div> }

  return (
    <div className="pokemove-wrapper">
      <p className={`pokemove ${moveData.type.name}`} onClick={()=>{toggleShowData(!showData)}}>{moveData.name.replace("-", " ")}</p>
      { showData ? <PokeMoveDetail data={moveData}/> : <></>}
    </div>
  )
}