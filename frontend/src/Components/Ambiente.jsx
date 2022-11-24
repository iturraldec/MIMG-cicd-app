export default function Ambiente({ ambientes, onChange }) {
  return (
    <div>
      <h3>Seleccione el ambiente</h3>
      <select onChange={e => onChange(e.target.value)}>
        {ambientes.map(
          ambiente => <option key={ambiente.codigo} value={ambiente.codigo}>{ambiente.valor}</option>
          )}
      </select>
    </div>
  )
}