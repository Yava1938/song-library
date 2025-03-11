// src/components/Song.js
import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, duration, album } = this.props;

    return (
        <div className="song">
          <h2>{title}</h2>
          <p>Artista: {artist}</p>
          <p>Álbum: {album}</p>
          <p>Duración: {duration}</p>
        </div>
    );
  }
}

export default Song;
