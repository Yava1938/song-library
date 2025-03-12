import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const Library = ({ favorites, setFavorites }) => {
  const removeFavorite = (title) => {
    setFavorites(favorites.filter(song => song.title !== title));
  };

  return (
    <div className="library">
      <h2>Biblioteca de Favoritos</h2>
      {favorites.length === 0 ? <p>No hay canciones favoritas aún.</p> : null}
      {favorites.map((song, index) => (
        <div key={index} className="song-favorite">
          <div className='favorite-title'>
            <h2>{song.title} </h2>
            <p> - </p>
            <p>{song.artist}</p>
          </div>
          <div className='favorite-time'>
          <FaTrash className="delete-icon" onClick={() => removeFavorite(song.title)} />
            <p>Duración: {song.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};