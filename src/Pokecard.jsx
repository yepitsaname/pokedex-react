import{ useEffect, useState } from 'react';

export default function Pokecard({url}){
  const [pokeData, setPokeData] = useState({});

  useEffect(()=>{
    fetch(url)
      .then(response => {
        if( response.status == 200 ) { return response.json() }
        else{ throw new Error(response.status) }
      })
      .then( data => console.log(data) )
      .catch( error => console.log(error) )
  },[])


  return <div>POKECARD</div>
}