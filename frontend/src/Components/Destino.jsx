export default function Destino({ destinos, onChange }) {
  return (
    <div>
      <h3>Seleccione el destino</h3>
      <select onChange={e => onChange(e.target.value)}>
        { destinos.map(
            destino => <option value={destino} key={destino}>{destino}</option>
        )}
      </select>
    </div>
  )
}