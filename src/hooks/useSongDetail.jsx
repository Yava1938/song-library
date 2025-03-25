import { useState, useEffect } from "react";

export const useSongDetail = (songId) => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongDetail = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
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
    };

    fetchSongDetail();
  }, [songId]);

  return { song, loading, error };
};