import { useState, useEffect, useCallback } from "react";

export const useSongDetail =  (songId) => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSongDetail = useCallback( async () => {
    setLoading(true);
    setError(null);
    try {

      const response = await fetch(`${process.env.REACT_APP_SPOTIFY_API_URL_TRACKS.replace('/me', '')}/${songId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("spotify_token")}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la canción");
      }
      
      const data = await response.json();
      setSong(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [songId]);
  
  useEffect(() => {
    fetchSongDetail();
  }, [fetchSongDetail]);

  return { song, loading, error, fetchSongDetail };
};