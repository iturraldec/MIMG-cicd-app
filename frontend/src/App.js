import { useEffect, useState } from 'react';
import './App.css';
import Encabezado from "./images/encabezado.jpeg";
import useAplicacion from "./hooks/useAplicacion";
import useAmbiente from './hooks/useAmbiente';
import useDestino from './hooks/useDestino';
import Ambiente from './Components/Ambiente';
import Aplicacion from './Components/Aplicacion';
import Destino from './Components/Destino';
import Variable from './Components/Variable';

function App() {
  //
  const { ambientes, codAmbiente, handleCodAmbiente } = useAmbiente();
  const { error, isLoaded, aplicaciones, codAplicacion, handleCodAplicacion } = useAplicacion();
  const { destinos, codDestino, handleCodDestino } = useDestino();
  const [variable,setVariable] = useState('');
  const [secretString,setSecretString] = useState('?');

  //
  const handleVariable = e => {
    setSecretString('?');
    setVariable(e.target.value);
  }

  //
  const createSecretString = () => {
    let cadena = `${codAplicacion}-${codDestino}--${variable}--`;

    setSecretString(cadena);
  }

  //
  useEffect(() => {
    setSecretString("?");
  }, [codAmbiente, codAplicacion, codDestino]);

  //
  return (
    <div className='App'>
      <header className='header'>
        <img src={Encabezado} alt='Logo del MIMG' />
        <label className='titulo'>Registro de Secrets en KeyVault</label>
      </header>

      <div className='formulario'>
        <section>
          <Ambiente ambientes={ambientes} onChange={codigo => handleCodAmbiente(codigo)} />
          
          <Aplicacion 
            error={ error } 
            isLoaded={ isLoaded } 
            aplicaciones={ aplicaciones } 
            onChange={ codigo => handleCodAplicacion(codigo) } 
          />
          
          <Destino destinos={destinos} onChange={ codigo => handleCodDestino(codigo) } />

          <Variable onChange={ e => handleVariable(e) } />

        </section>

      </div>

      <div className='secret-string'>
        { secretString }
      </div>
        
      <div className='contenedor-botones'>
        <button className="limpiar" onClick={ () => setSecretString('?') }>Limpiar</button>
        <button className="generar" onClick={ createSecretString }>Generar Secret String</button>
        <button className="enviar" >Enviar</button>
      </div>
      
    </div>
  );
}

export default App;
