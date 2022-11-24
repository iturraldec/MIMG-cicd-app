import { useState, useEffect } from "react";

//
const aDestinos =  ['Cloud','Local'];

//
export default function useDestino() {
  const [destinos,setDestinos] = useState([]);
  const [codDestino,setCodDestino] = useState(null);
  const handleCodDestino = (codigo) => setCodDestino(codigo);

  //
  useEffect(() => {
    setDestinos(aDestinos);
    setCodDestino(aDestinos[0]);
  }, []);

  return { destinos, codDestino, handleCodDestino }
}