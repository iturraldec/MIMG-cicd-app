import { useState, useEffect } from "react";

//
export default function useAplicacion() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [aplicaciones,setAplicaciones] = useState([]);
  const [codAplicacion,setCodAplicacion] = useState(null);
  const handleCodAplicacion = (codigo) => setCodAplicacion(codigo);

  //
  useEffect(() => {
      fetch('https://localhost:7069/api/aplicaciones')
      .then(response => response.json())
      .then(data => {
          setIsLoaded(true);
          setAplicaciones(data);
          setCodAplicacion(data[0].nombreCorto);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        })
  }, []);

  return { error, isLoaded, aplicaciones, codAplicacion, handleCodAplicacion }
}