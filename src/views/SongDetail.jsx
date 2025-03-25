import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpotify, FaClock, FaFire, FaArrowLeft } from "react-icons/fa";
import { useSongDetail } from "../hooks/useSongDetail";
import {Header} from '../components/Header';

export const SongDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { song, loading, error, fetchSongDetail } = useSongDetail(id); 

  if (loading) return(
      <div>
        <Header /> 
        <p>Cargando canción...</p>
      </div>
      );
  if (error) return(
      <div>
        <Header /> 
        <p>Error: {error}</p>
      </div>);
  if (!song) return(
      <div>
        <Header /> 
        <p>No se encontró la canción</p>
    </div>
    );

  const { name, duration_ms, popularity, external_urls, album, artists, explicit } = song;
  console.log("song: ", song);

  const convertDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <Header />
    <div className="song-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft className="back-icon" /> Volver
      </button>

      <div className="album-container">
        <img src={album.images[0].url} alt={album.name} className="album-cover" />
      </div>

      <div className="info">
        <h1 className="song-title">{name}</h1>
        <h2 className="artist-name">{artists.map(artist => artist.name).join(", ")}</h2>

        <p className="album-info">
          Álbum: <span>{album.name}</span> ({album.release_date.split("-")[0]})
        </p>

        <div className="details">
          <p><FaClock className="icon" /> Duración: {convertDuration(duration_ms)}</p>
          <p><FaFire className="icon" /> Popularidad: {popularity}</p>
          {explicit && <p className="explicit-tag">🔞 Explícito</p>}
        </div>

        <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer" className="spotify-button">
          <FaSpotify className="spotify-icon" /> Escuchar en Spotify
        </a>
      </div>
    </div>
    </div>
  );
};