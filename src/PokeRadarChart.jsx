import { useRef, useEffect, useState } from 'react'
import './PokeRadarChart.css'
import Chart from './Utilities'

export default function PokeRadarChart({stats}){
  const canvasRef = useRef(null);
  const [canvasElement, setCanvasElement] = useState(null);

  useEffect(()=>{
    setCanvasElement(canvasRef.current)
  },[])

  const getPoints = () => {
    let keys = {}
    stats.forEach( stat => {
      keys[stat.stat.name] = stat.base_stat / 255 * 100;
    })

    let points = [
      [keys['hp'],'HP'],
      [keys['special-attack'],'S ATK'],
      [keys['special-defense'],'S DEF'],
      [keys['speed'],'SPD'],
      [keys['defense'],'DEF'],
      [keys['attack'],'ATK']
    ]
    return points;
  }

  useEffect(()=>{
    if(canvasElement){
      Chart.drawHexChart(canvasElement, 100, getPoints())
    }
  },[canvasElement])

  return (
    <canvas ref={canvasRef} className='pokeradarchart' />
  )
}