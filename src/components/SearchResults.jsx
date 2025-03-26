import React from 'react';
import Song from './Song';
import {ResultsContainer, Title, SongResult} from '../css/SearchResults-styles.js';

export const SearchResults = ({songs}) =>{
    return (
        <ResultsContainer>
            <Title>Resultado de busqueda...</Title>
            {songs.length === 0 ? (
                <p>No se encontraron canciones</p>
            ): (
            songs.map((song, index) => (
                <SongResult> key={index}
                    <Song 
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration} />
                </SongResult>
            ))
            )}
        </ResultsContainer>
    );
}