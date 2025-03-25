import { useState, useEffect } from "react";
import axios from "axios";

export const useConsumeApi = (options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Para evitar actualizaciones después de desmontar el componente

    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("options: ", options);
        const response = await axios(options);
        console.log("response: ", response);
        if (isMounted) setData(response.data);
      } catch (err) {
        if (isMounted) setError(err.response?.data?.message || err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [options]); // Dependemos de "options" para que se vuelva a ejecutar cuando cambie

  return { data, loading, error };
};