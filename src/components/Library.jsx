import React from 'react';
import { LibraryContainer, DeleteIcon, FavoriteSong, FavoriteTitle, TitleInfo, SongName, AlbumName, FavoriteTime } from '../css/Library-styles';

export const Library = ({ favorites, setFavorites }) => {
  const removeFavorite = (title) => {
    setFavorites(favorites.filter(song => song.track.name !== title));
  };
  function convertMilliseconds(ms) {
    const minutes = Math.floor(ms / 60000); 
    const seconds = Math.floor((ms % 60000) / 1000); 
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <LibraryContainer>
      <h2>Biblioteca de Favoritos</h2>
      {favorites.length === 0 ? <p>No hay canciones favoritas aún.</p> : null}
      {favorites.map((song) => (
        <FavoriteSong key={song.track.id}>
          <FavoriteTitle>
            <TitleInfo>
              <SongName>{song.track.name} </SongName>
              <AlbumName>{song.track.album.name} </AlbumName>
            </TitleInfo>
            <p> - </p>
            <p>{song.track.artists[0].name}</p>
          </FavoriteTitle>
          <FavoriteTime>
          <DeleteIcon  onClick={() => removeFavorite(song.track.name)} />
            <p>Duración: {convertMilliseconds(song.track.duration_ms)}</p>
          </FavoriteTime>
        </FavoriteSong>
      ))}
    </LibraryContainer>
  );
};