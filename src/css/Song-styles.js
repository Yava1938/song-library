import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

export const SongContainer = styled.div`
 background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 3px 0;
  }
`;



export const HeartIcon = styled(({ isFavorite, ...rest }) => <FaHeart {...rest} />)` //styled(FaHeart)
  color: ${(props) => (props.isFavorite ? "red" : "gray")};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;

