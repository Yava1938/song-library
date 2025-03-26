import styled from 'styled-components';

export const SongDetailContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #1c1c1c;
  color: #fff;
  border-radius: 12px;
  max-width: 800px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin: 40px auto;
`;
 
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  gap: 8px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1db954;
  }
`;

export const BackIcon = styled.span`
  margin-right: 10px;
`;

export const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px 0;

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  color: white;
`;

export const SongTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ArtistName = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 15px;
  opacity: 0.8;
`;

export const AlbumInfo = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px 0;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 8px;
  }
`;

export const ExplicitTag = styled.p`
  font-size: 14px;
  background: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 5px;
`;

export const SpotifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #1db954;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  text-decoration: none;
  margin: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #17a44c;
  }
`;

export const SpotifyIcon = styled.span`
  font-size: 20px;
`;