import './PokeMoveDetail.css'

export default function PokeMoveDetail({data}){
  return (
    <table className="pokemovedetail">
      <thead>
        <tr>
          <th colSpan="1">{data.damage_class.name}</th>
          <th colSpan="3">{data.type.name}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <th>Power</th>
        <td>{data.power != null? data.power : "N/A"}</td>
        <th>Accuracy</th>
        <td>{data.accuracy}</td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">{data.flavor_text_entries[0].flavor_text}</td>
        </tr>
      </tfoot>
    </table>
  )
}