import React from 'react';
import { FaHeart } from 'react-icons/fa';

export const Song = ({ title, artist, duration, album, isFavorite, onToggleFavorite }) => {
    return (
        <div className="song">
          <h2>{title}</h2>
          <p>Artista: {artist}</p>
          <p>Álbum: {album}</p>
          <p>Duración: {duration}</p>
          <FaHeart 
        className={`heart-icon ${isFavorite ? 'favorite' : ''}`} 
        onClick={onToggleFavorite} 
      />
        </div>
    );
}