import styled from "styled-components";


export const ResultsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #1b1b1b;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const SongResult = styled.div`
  padding: 10px;
  border-bottom: 1px solid #333;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;
