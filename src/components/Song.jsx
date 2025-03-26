import React from 'react';
import { SongContainer, HeartIcon } from '../css/Song-styles.js';

export const Song = ({ title, artist, duration, album, isFavorite, onToggleFavorite }) => {
    return (
        <SongContainer>
          <h2>{title}</h2>
          <p>Artista: {artist}</p>
          <p>Álbum: {album}</p>
          <p>Duración: {duration}</p>
          <HeartIcon 
          isFavorite={isFavorite}
        onClick={(event) => {
          event.stopPropagation(); 
          onToggleFavorite();
        }} 
      />
        </SongContainer>
    );
}