import { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import '../css/Valor.css';

export default function Valor(props) {
  const [isVisible,setIsVisible] = useState(true);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
    var tipo = document.getElementById("valor");

    tipo.type = (tipo.type === 'password')  ? 'text' : 'password';
  }

  return <div>
    <h3><label htmlFor="valor">Ingrese el valor de la variable</label></h3>
    <input id='valor' placeholder='Valor de la variable' onChange={ props.onChange } />
    <span className='boton-ojo' onClick={ handleIsVisible }>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
  </div>
}