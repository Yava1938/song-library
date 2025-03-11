import React from 'react';

export const SearchBar = ({query, handleChange}) =>{
    return (
        <div className='search-bar'>
        <input 
        type='text' 
        className='search-input' 
        placeholder='buscar cancion o artista...'
        value={query}
        onChange={handleChange}/>
        {/*<button onClick={handleSearch} className='search-button'>Buscar</button>*/}
        </div>
    );
}
