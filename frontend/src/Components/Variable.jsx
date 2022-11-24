export default function Variable(props) {
  return (
    <div>
      <h3>Inserte nombre de variable</h3>
      <input type='text' onChange={props.onChange}/>
    </div>
  )
}