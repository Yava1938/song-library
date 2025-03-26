import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpotify, FaClock, FaFire, FaArrowLeft } from "react-icons/fa";
import { useSongDetail } from "../hooks/useSongDetail";
import {Header} from '../components/Header';
import {
  SongDetailContainer,
  BackButton,
  BackIcon,
  AlbumContainer,
  InfoContainer,
  SongTitle,
  ArtistName,
  AlbumInfo,
  Details,
  ExplicitTag,
  SpotifyButton,
  SpotifyIcon,
} from "../css/SongDetail-styles";

export const SongDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { song, loading, error } = useSongDetail(id); 

  if (loading) return(
      <SongDetailContainer>
        <Header /> 
        <p>Cargando canción...</p>
      </SongDetailContainer>
      );
  if (error) return(
      <SongDetailContainer>
        <Header /> 
        <p>Error: {error}</p>
      </SongDetailContainer>);
  if (!song) return(
      <SongDetailContainer>
        <Header /> 
        <p>No se encontró la canción</p>
    </SongDetailContainer>
    );

  const { name, duration_ms, popularity, external_urls, album, artists, explicit } = song;

  const convertDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SongDetailContainer>
      <Header />
      <BackButton onClick={() => navigate(-1)} className="back-button">
      <BackIcon><FaArrowLeft /></BackIcon> Volver
      </BackButton>

      <AlbumContainer>
        <img src={album.images[0].url} alt={album.name} />
      </AlbumContainer>

      <InfoContainer>
        <SongTitle>{name}</SongTitle>
        <ArtistName>{artists.map(artist => artist.name).join(", ")}</ArtistName>

        <AlbumInfo>
          Álbum: <span>{album.name}</span> ({album.release_date.split("-")[0]})
        </AlbumInfo>

        <Details>
          <p><FaClock className="icon" /> Duración: {convertDuration(duration_ms)}</p>
          <p><FaFire className="icon" /> Popularidad: {popularity}</p>
        </Details>
          
          {explicit && <ExplicitTag>🔞 Explícito</ExplicitTag>}

        <SpotifyButton href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <SpotifyIcon><FaSpotify /></SpotifyIcon> Escuchar en Spotify
        </SpotifyButton>
      </InfoContainer>
    </SongDetailContainer>
  );
};