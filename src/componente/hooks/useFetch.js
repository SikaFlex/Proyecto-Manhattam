import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    IsLoading: true,
    errors: null,
  });

  const getFetch = async (url) => {
    try {
      if (!url) return; // En caso de que no tenga url, salimos de la función
      const response = await fetch(url); // Ejecutamos el fetch a la url que nos han pasado
     
      if (!response.ok) {
        // Manejar respuestas no exitosas aquí
        throw new Error(`Respuesta no exitosa: ${response.status}`);
      }
      const data = await response.json(); // Convertimos la respuesta a JSON
      setState({
        data,
        IsLoading: false,
        errors: null, // Reiniciamos los errores si la solicitud es exitosa
      });
    } catch (error) {
      setState({
        data: null, // También devolvemos la data en null en caso de error
        IsLoading: false, // false para indicar que ya no está cargando
        errors: error, // y devolvemos el error
      });
    }
  };

  useEffect(() => {
    // Use effect para que lo ejecute primero
    getFetch(url); // Ejecutamos la función de la query con la URL proporcionada
  }, [url]); // Estará siempre escuchando la url por si cambia y vuelve a ejecutar la query

  return {
    // Devolvemos los 3 parámetros del objeto
    data: state.data,
    IsLoading: state.IsLoading,
    errors: state.errors,
  };
};
