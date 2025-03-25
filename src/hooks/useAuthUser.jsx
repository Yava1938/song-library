import { useState } from "react";
import axios from "axios";
import qs from "qs"; 

export const useAuthUser = () => {
  const [token, setToken] = useState(localStorage.getItem("spotify_token_user") || null);


    const fetchTokenUser = async() =>{
      if (token) {
        return token;
      }

      try {
        const data = qs.stringify({
          grant_type: "authorization_code",
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          scope: "user-library-read",
          redirect_uri: 'https://example.com/callback',
          code: 'AQC2hufJTmFDYbMUgTY-VdUNZm8Wwz222j53_QzCH6Bp-niQId7iK4RkrA8m5HGCRRBRhomIkhC8GsVGpzR8h1TCPHrTXatHcTgLSbQ_UPti9gsZ_5vw8VpnOaR6fGrllZY0pZ9cNNvoTRuywf96G703ebQvYIxf2ogzqJPJ2TKqPD4uHoS5K4WxJx37Ux9BKNAj'
        });
  
        const response = await axios.post(
          process.env.REACT_APP_SPOTIFY_API_URL_TOKEN,
          data, 
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        const newToken = response.data.access_token;
        setToken(newToken);
        localStorage.setItem("spotify_token_user", newToken);
        return newToken
      } catch (err) {
        console.log("Error al obtener el token: " + err.message);
      } 
    }

  return {token, fetchTokenUser};
};