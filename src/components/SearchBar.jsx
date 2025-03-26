import React from 'react';
import { SearchBarContainer, SearchInput } from '../css/SearchBar-styles';

export const SearchBar = ({query, handleChange}) =>{
    return (
        <SearchBarContainer>
        <SearchInput 
        type='text' 
        className='search-input' 
        placeholder='buscar cancion o artista...'
        value={query}
        onChange={handleChange}/>
        {/*<button onClick={handleSearch} className='search-button'>Buscar</button>*/}
        </SearchBarContainer>
    );
}