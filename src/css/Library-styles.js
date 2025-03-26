import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const LibraryContainer = styled.div`
  padding: 20px;
  background: #121212;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
`;

export const FavoriteSong = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const FavoriteTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongName = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

export const AlbumName = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: #b3b3b3;
`;

export const FavoriteTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
  color: red;
  transition: color 0.3s ease;
  &:hover {
    color: darkred;
  }
`;
