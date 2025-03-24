import React, { useEffect, useState }from 'react';
import {Song} from '../components/Song';
import {Header} from '../components/Header';
import {SearchBar} from '../components/SearchBar';
import { Library } from '../components/Library'
import { useSongs } from '../hooks/useSongs';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useAuthUser } from '../hooks/useAuthUser';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const {fetchToken} = useAuth(); 
  const {fetchTokenUser} = useAuthUser(); 

  useEffect(() => {
    const authenticate = async () => {
      await fetchToken(); 
      await fetchTokenUser(); 
      setLoading(false); 
    };

    authenticate();
  }, [fetchToken, fetchTokenUser]); 

  const { songs, favorites, toggleFavorite, setFavorites, query, filteredData, handleChange } = useSongs();
  
  if (loading) {
    return <p>Cargando autenticación...</p>;
  }

  function convertMilliseconds(ms) {
    const minutes = Math.floor(ms / 60000); 
    const seconds = Math.floor((ms % 60000) / 1000); 
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  }
  return (
    <div className="home">
      <Header />
      <SearchBar query={query} handleChange={handleChange} />
      
      <div className='main-container'>
        <div className='container-all'>
            <h2 className='songs-container-title'>Todas las canciones: {songs.length}</h2>
          <div className="songs-container">
          {songs.map((song, index) => (
            <Song
            key={index}
            title={song.track.name}
            artist={song.track.artists[0].name}
            duration={convertMilliseconds( song.track.duration_ms)}
            isFavorite={favorites.some((fav) => fav.track.name === song.track.name)}
            onToggleFavorite={() => toggleFavorite(song)}
            />
          ))}
          </div>
        </div>

        <div className='container-selectas'>
          <h2 className='songs-container-title'>Consultadas: {filteredData.length}</h2>
            <div className="songs-container">
              <AnimatePresence>
              {filteredData.length === 0 && query !== '' && (
                <motion.p 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="no-results"
                >
                  ❌ No se encontraron resultados para: <strong>{query}</strong>
                </motion.p>
              )}

              {filteredData.map((song, index) =>(
                <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Song
                  key={index}
                  title={song.track.name}
                  artist={song.track.artists[0].name}
                  duration={convertMilliseconds(song.track.duration_ms)}
                  isFavorite={favorites.some((fav) => fav.track.name === song.track.name)}      
                  onToggleFavorite={() => toggleFavorite(song)}
                />
                </motion.div>
              ))}
              </AnimatePresence>
              </div>
        </div>
      </div>
      <div className='favoritas-container'>
        <Library favorites={favorites} setFavorites={setFavorites} />
      </div>
    </div>
  );
};