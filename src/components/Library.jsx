import React from 'react';
import { FaTrash } from 'react-icons/fa';

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
    <div className="library">
      <h2>Biblioteca de Favoritos</h2>
      {favorites.length === 0 ? <p>No hay canciones favoritas aún.</p> : null}
      {favorites.map((song, index) => (
        <div key={index} className="song-favorite">
          <div className='favorite-title'>
            <div className='favorite-title-info'>
              <h2 className='nameSong'>{song.track.name} </h2>
              <h2 className='album'>{song.track.album.name} </h2>
            </div>
            <p> - </p>
            <p>{song.track.artists[0].name}</p>
          </div>
          <div className='favorite-time'>
          <FaTrash className="delete-icon" onClick={() => removeFavorite(song.track.name)} />
            <p>Duración: {convertMilliseconds(song.track.duration_ms)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};