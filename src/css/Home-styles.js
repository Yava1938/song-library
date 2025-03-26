import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  max-height: 350px;
  overflow-y: auto;
`;

export const SongsContainerTitle = styled.h2`
  text-align: left;
  margin: 10px 0;
`;

export const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

export const FavoritasContainer = styled.div`
  width: 60%;
  margin: 30px auto;
`;

export const NoResults = styled(motion.p)`
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const SongContainer = styled.div`
  cursor: pointer;
`;

export const RetryButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;