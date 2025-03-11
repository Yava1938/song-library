import React from 'react';
import Song from './Song';

export const SearchResults = ({songs}) =>{
    return (
        <div className="songs-results">
            <h2>Resultado de busqueda...</h2>
            {songs.map((song, index) => {
                <div className='song-result'>
                    <Song 
                    key={index}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration} />
                </div>
            })}
        </div>
    );
}