import React from 'react';

export const Song = ({ title, artist, duration, album }) => {
    return (
        <div className="song">
          <h2>{title}</h2>
          <p>Artista: {artist}</p>
          <p>Álbum: {album}</p>
          <p>Duración: {duration}</p>
        </div>
    );
}
