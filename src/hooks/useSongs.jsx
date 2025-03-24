import { useEffect, useState } from "react";
import { useSearch } from "./useSearch";
import axios from "axios";


export const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const fetchSongs = async () =>{
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
      } catch (err) {
        console.log("Error obtneniendo listado de canciones", err?.response ? err?.response?.data : err);
      } 
      return response
    }
    const getSongs = async () => {
      const songs = await fetchSongs();
      setSongs(songs?.data?.items ?? [])
      return songs?.data?.items ?? []
    };
    
getSongs();
    console.log("La app se ha cargado correctamente");
  }, []); 

  const toggleFavorite = (song) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.track.name === song.track.name)
        ? prevFavorites.filter((fav) => fav.track.name !== song.track.name)
        : [...prevFavorites, song]
    );
  };

  const { query, filteredData, handleChange } = useSearch(songs);

  return { songs, favorites, toggleFavorite, setFavorites, query, filteredData, handleChange };
};