import { useState, useEffect } from "react";

//
const aAmbientes = [
  { codigo: 'DEV',
    valor: 'Desarrollo'
  },
  { codigo: 'TST',
    valor: 'Testing'
  },
  { codigo: 'PRD',
    valor: 'Producción'
  },
];

//
export default function useAmbiente() {
  const [ambientes,setAmbientes] = useState([]);
  const [codAmbiente,setCodAmbiente] = useState(null);
  const handleCodAmbiente = (codigo) => setCodAmbiente(codigo);

  //
  useEffect(() => {
    setAmbientes(aAmbientes);
    setCodAmbiente(aAmbientes[0].codigo);
  }, []);

  return { ambientes, codAmbiente, handleCodAmbiente }
}