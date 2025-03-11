// src/components/Header.js
import React, { useState } from 'react';

const SearchBar = () =>{
    const [query, setQuery] = useState('');

    const handleChange = (e) =>{
        setQuery(e.target.value)
    }

    const handleSearch = () =>{
        console.log('Buscando: ' + query)
    }
    
    return (
        <div className='search-bar'>
        <input 
        type='text' 
        className='search-input' 
        placeholder='buscar...'
        value={query}
        onChange={handleChange}></input>
        <button onClick={handleSearch} className='search-button'>Buscar</button>
        </div>
    );
}



export default SearchBar;
