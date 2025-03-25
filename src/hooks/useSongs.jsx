import { useEffect, useState } from "react";
import { useSearch } from "./useSearch";
import axios from "axios";


export const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchSongs = async () =>{
    setLoading(true);
    setError(null);
    let response;
    try {
      response =  await axios.get(
        process.env.REACT_APP_SPOTIFY_API_URL_TRACKS,
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("spotify_token_user")}`,
          },
        }
      );
      setSongs(response?.data?.items ?? [])
    } catch (err) {
      console.log("Error obtneniendo listado de canciones", err?.response ? err?.response?.data : err);
      setError("Hubo un problema al cargar los datos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
       fetchSongs();
  }, []); 

  const toggleFavorite = (song) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.track.name === song.track.name)
        ? prevFavorites.filter((fav) => fav.track.name !== song.track.name)
        : [...prevFavorites, song]
    );
  };

  const { query, filteredData, handleChange } = useSearch(songs);

  return { songs, favorites, toggleFavorite, setFavorites, query, filteredData, handleChange, loading, error, fetchSongs };
};