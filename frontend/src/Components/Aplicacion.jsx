export default function Aplicacion({ error, isLoaded, aplicaciones, onChange }) {
  if (error) {
    return <div>Error: La URL es incorrecta o el servidor de datos no esta activo...</div>;
  } else if (!isLoaded) {
    return <div>Cargando aplcaciones...</div>
  }
  else {
    return (
      <div>
        <h3>Seleccione la aplicación</h3>
        <select onChange={e => onChange(e.target.value)}>
          {aplicaciones.map(
            aplicacion => <option value={aplicacion.nombreCorto} key={aplicacion.codAplicacion}>{aplicacion.descripcion}</option>
          )}
        </select>
      </div>
    )
  }
}