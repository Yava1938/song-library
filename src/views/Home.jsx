import React, { useEffect, useState }from 'react';
import {Song} from '../components/Song';
import {Header} from '../components/Header';
import {SearchBar} from '../components/SearchBar';
import { Library } from '../components/Library'
import { useSongs } from '../hooks/useSongs';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useAuthUser } from '../hooks/useAuthUser';
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  SongsContainerTitle,
  SongsContainer,
  FavoritasContainer,
  NoResults,
  SongContainer,
  RetryButton,
} from '../css/Home-styles';

export const Home = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const {fetchToken} = useAuth(); 
  const {fetchTokenUser} = useAuthUser(); 
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      await fetchToken(); 
      await fetchTokenUser(); 
      setAuthLoading(false); 
    };

    authenticate();
  }, [fetchToken, fetchTokenUser]); 

  const { songs, favorites, toggleFavorite, setFavorites, query, filteredData, handleChange, loading, error, fetchSongs } = useSongs();
  
  if (authLoading) {
    return <p>Cargando autenticación...</p>;
  }

  if (loading) {
    return ( 
    <HomeContainer>
      <Header />
    <p>Cargando canciones...</p>
    </HomeContainer>
  );}

  if (error) {
    return (
      <HomeContainer>
      <Header />
        <p>{error}</p>
        <RetryButton onClick={fetchSongs}>Reintentar</RetryButton>
      </HomeContainer>
    );
  }

  function convertMilliseconds(ms) {
    const minutes = Math.floor(ms / 60000); 
    const seconds = Math.floor((ms % 60000) / 1000); 
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  }
  return (
    <HomeContainer>
      <Header />
      <SearchBar query={query} handleChange={handleChange} />
      
      <MainContainer>
        <div className='container-all'>
            <SongsContainerTitle>Todas las canciones: {songs.length}</SongsContainerTitle>
          <SongsContainer>
          {songs.map((song) => (
            <SongContainer key={song.track.id} onClick={() => navigate(`/song/${song.track.id}`)} style={{ cursor: "pointer" }}>
            <Song
            title={song.track.name}
            artist={song.track.artists[0].name}
            album={song.track.album.name}
            duration={convertMilliseconds( song.track.duration_ms)}
            isFavorite={favorites.some((fav) => fav.track.name === song.track.name)}
            onToggleFavorite={() => toggleFavorite(song)}
            />
            </SongContainer>
          ))}
          </SongsContainer>
        </div>

        <div className='container-selectas'>
          <SongsContainerTitle>Consultadas: {filteredData.length}</SongsContainerTitle>
            <SongsContainer>
              <AnimatePresence>
              {filteredData.length === 0 && query !== '' && (
                <NoResults 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="no-results"
                >
                  ❌ No se encontraron resultados para: <strong>{query}</strong>
                </NoResults>
              )}

              {filteredData.map((song, index) =>(
                <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/song/${song.track.id}`)}
                style={{ cursor: "pointer" }}
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
              </SongsContainer>
        </div>
      </MainContainer>
      <FavoritasContainer>
        <Library favorites={favorites} setFavorites={setFavorites} />
      </FavoritasContainer>
    </HomeContainer>
  );
};