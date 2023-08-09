import { useEffect, useState } from "react";
/* import uuid4 from "uuid4"; */

const useMostrarDatosPizza = async (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            setError(true);
          } else {
            const datos = await response.json();
            setData(datos);
            console.log(datos);
          }
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
    
   
    return {data,loading,error};

};


const useEliminarPizza = async (id) => {
  try {
    await fetch(`http://localhost:3000/perfil/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error(error);
    throw new Error("Error al eliminar el cliente");
  }
}
export const useDatosPizza = {
  useMostrarDatosPizza,
  useEliminarPizza
};