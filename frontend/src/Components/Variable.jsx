export default function Variable(props) {
  return (
    <div>
      <h3>Ingrese el nombre de la variable</h3>
      <input type='text' onChange={props.onChange} placeholder='Nombre de la variable' />
    </div>
  )
}